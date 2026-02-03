import {EventName, LoLEvent} from "../../data/LoLEvents.js";
import {GameClient} from "../LiveApiClient.js";

export interface Subscription {
    unsubscribe(): void,

    readonly filter?: (e: LoLEvent) => boolean
    readonly eventHandler: (event: LoLEvent) => void
}

export type FetchOptions = {
    /**
     * Interval in milliseconds | default: 1000
     */
    interval?: number,
    /**
     * Max retries before giving up | default: 100
     */
    maxRetries?: number

    /**
     * Callback for errors.
     */
    onError?: (err: Error) => void

    /**
     * Callback for max retries reached
     */
    onMaxRetriesReached?: (err: Error) => void

    /**
     * Disables error logging to console
     */
    disableErrorLogging?: boolean
}

/**
 * Handles fetching of events from the Riot API and notifies observers about new events
 */
export class LoLEventManager {

    private readonly fetchInterval: number = 1000;
    private readonly maxRetries: number = 100;
    private readonly onError?: (err: Error) => void;
    private readonly onMaxRetriesReached?: (err: Error) => void;
    private readonly disableErrorLogging: boolean = false;

    private timer?: NodeJS.Timeout;
    private observers: Subscription[] = [];

    private latestEventIndex: number = 0;
    private retryCount: number = 0;

    private running: boolean = false;
    private inFlight: boolean = false;

    public constructor(fetchOptions?: FetchOptions) {
        this.fetchInterval = fetchOptions?.interval ?? this.fetchInterval;
        this.maxRetries = fetchOptions?.maxRetries ?? this.maxRetries;
        this.onError = fetchOptions?.onError;
        this.onMaxRetriesReached = fetchOptions?.onMaxRetriesReached;
        this.disableErrorLogging = fetchOptions?.disableErrorLogging ?? this.disableErrorLogging;
    }

    public isFetching(): boolean {
        return this.running;
    }

    /**
     * Starts fetching events from the Riot API. Fetching stops when max retries reached or is manually stopped.
     */
    public startFetching(): void {
        if (this.running) return;

        this.running = true;
        console.debug(`Fetching events every ${this.fetchInterval}ms`);
        this.timer = setTimeout(this.tick, this.fetchInterval);
    }

    //tick is called every fetchInterval milliseconds
    private tick = async () => {
        if (!this.running) return;

        // Prevent overlapping requests if the endpoint is slow
        if (this.inFlight) {
            this.timer = setTimeout(this.tick, this.fetchInterval);
            return;
        }

        this.inFlight = true;
        try {
            const fetchedEvents = await GameClient.getEvents();
            this.retryCount = 0;

            if (fetchedEvents.length > this.latestEventIndex) {
                const newEvents = fetchedEvents.slice(this.latestEventIndex);
                for (const ev of newEvents) {
                    this.observers
                        .filter(s => !s.filter || s.filter(ev))
                        .forEach(s => s.eventHandler(ev));
                }

                this.latestEventIndex = fetchedEvents.length;
                if (newEvents[this.latestEventIndex - 1].EventName === EventName.GAME_END) {
                    this.latestEventIndex = 0
                }
            }
        } catch (err) {
            const e = err instanceof Error ? err : new Error(String(err));
            if (!this.disableErrorLogging) {
                console.error(`[${this.retryCount + 1}] Error fetching events: ${e.message}`);
            }
            this.retryCount++;
            this.onError?.(e);

            if (this.retryCount >= this.maxRetries) {
                if (!this.disableErrorLogging) {
                    console.error(`Max retries reached (${this.maxRetries}). Stopping fetching events`);
                }
                this.stopFetching();
                this.onMaxRetriesReached?.(e);
            }
        } finally {
            this.inFlight = false;
            if (this.running) {
                this.timer = setTimeout(this.tick, this.fetchInterval);
            }
        }
    };

    /**
     * Stops fetching events.
     */
    public stopFetching(): void {
        this.running = false;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = undefined;
        }
        this.inFlight = false;
    }

    /**
     * Subscribe to new events
     * @param eventHandler event handler
     * @param filter optional filter function. Only events that pass the filter will be notified
     */
    public subscribe(eventHandler: (event: LoLEvent) => void, filter?: (e: LoLEvent) => boolean): Subscription {
        const subscription: Subscription = {
            eventHandler: eventHandler,
            filter: filter,
            unsubscribe: () => this.unsubscribe(eventHandler, filter)
        };
        this.observers.push(subscription);
        return subscription;
    }

    /**
     * Unsubscribe from events. Better use the returned subscription object from {@link subscribe}
     * @param eventHandler event handler to unsubscribe
     * @param filter optional filter function. Only events that pass the filter will be notified
     */
    public unsubscribe(eventHandler: (event: LoLEvent) => void, filter?: (e: LoLEvent) => boolean): void {
        this.observers = this.observers.filter(s => s.eventHandler !== eventHandler || s.filter !== filter);
    }
}


