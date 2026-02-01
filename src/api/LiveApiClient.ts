import {Agent, request} from "undici";
import {RIOT_CERT} from "../resources/riotgames.pem.js";
import {LoLEvent} from "../data/LoLEvents.js";

const CERT_AGENT = new Agent({
    connect: {
        ca: RIOT_CERT,
    },
});

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
}

const GET_REQUEST_OPTIONS = {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    dispatcher: CERT_AGENT
};

const HOST = 'https://127.0.0.1:2999'


/**
 * Custom request to get live client data
 * @param uri not host. Just the path. Example: '/liveclientdata/allplayerdata'
 */
export async function requestLiveApi(uri: string): Promise<any> {
    return await request(`${HOST}${uri}`, GET_REQUEST_OPTIONS)
        .then(res => res.body.json(),
            err => {
                console.error(`Error fetching live client "${HOST+uri}" data: ${err.message}`)
                throw err
            })
}

/**
 * Get all events from the live client data endpoint
 */
export async function getEvents(): Promise<LoLEvent[]> {
    return requestLiveApi('/liveclientdata/eventdata')
        .then((res: any) => (res.Events ?? []) as LoLEvent[])
}
