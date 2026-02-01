import {DragonType, TeamName} from "./Constants.js";

export enum EventName {
    GAME_START = 'GameStart',
    GAME_END = 'GameEnd',
    MINIONS_SPAWNING = 'MinionsSpawning',
    FIRST_BLOOD = 'FirstBlood',
    FIRST_TOWER = 'FirstBrick',
    TURRET_KILLED = 'TurretKilled',
    INHIB_KILLED = 'InhibKilled',
    DRAGON_KILL = 'DragonKill',
    HERALD_KILL = 'HeraldKill',
    BARON_KILL = 'BaronKill',
    CHAMPION_KILL = 'ChampionKill',
    MULTIKILL = 'Multikill',
    ACE = 'Ace',
    INHIB_RESPAWNED = 'InhibRespawned',
    INHIB_RESPAWN_SOON = 'InhibRespawningSoon',
    HORDE_KILL = 'HordeKill',
}

/**
 * Events in `/liveclientdata/eventdata`
 */
export interface LoLEvent {
    /** Number that gets incremented with each event. So more of an index */
    EventID: number,
    /** Type of event */
    EventName: EventName,
    /** Time of event in seconds */
    EventTime: number
}


export type GameStart= LoLEvent & {
    EventName: EventName.GAME_START
}

export type MinionsSpawning = LoLEvent & {
    EventName: EventName.MINIONS_SPAWNING
}

/**
 * Triggers **after** the according {@link ChampionKill} event
 */
export type FirstBlood = LoLEvent & {
    EventName: EventName.FIRST_BLOOD
    KillerName: string
}

/**
 * Triggers **after** the according {@link TurretKilled} Event
 */
export type FirstTower = LoLEvent & {
    EventName: EventName.FIRST_TOWER
    KillerName: string
}

export type TurretKilled = LoLEvent & {
    EventName: EventName.TURRET_KILLED
    TurretKilled: string
    KillerName: string
    Assisters: string[]
}

export type InhibKilled = LoLEvent & {
    EventName: EventName.INHIB_KILLED
    InhibKilled: string
    KillerName: string
    Assisters: string[]
}

/**
 * Dragon was killed
 * @note Not available in spectator mode
 */
export type DragonKill = LoLEvent & {
    EventName: EventName.DRAGON_KILL
    DragonType: DragonType
    Stolen: string
    KillerName: string
    Assisters: string[]
}

/**
 * Herald was killed
 * @note Not available in spectator mode
 */
export type HeraldKill = LoLEvent & {
    EventName: EventName.HERALD_KILL
    Stolen: string
    KillerName: string
    Assisters: string[]
}

/**
 * Baron was killed
 * @note Not available in spectator mode
 */
export type BaronKill = LoLEvent & {
    EventName: EventName.BARON_KILL
    Stolen: string
    KillerName: string
    Assisters: string[]
}

export type ChampionKill = LoLEvent & {
    EventName: EventName.CHAMPION_KILL
    VictimName: string
    KillerName: string
    Assisters: string[]
}

/**
 * Triggers after the second, third and so on kill.
 */
export type Multikill = LoLEvent & {
    EventName: EventName.MULTIKILL
    KillerName: string
    KillStreak: number
}

/**
 * Triggers **after** the according {@link ChampionKill} and {@link Multikill} event
 */
export type Ace = LoLEvent & {
    EventName: EventName.ACE
    /** killer of the last enemy */
    Acer: string
    AcingTeam: TeamName
}

export type InhibRespawned = LoLEvent & {
    EventName: EventName.INHIB_RESPAWNED
    /**Name of the inhib that was respawned*/
    InhibRespawned: string
}

export type InhibRespawningSoon = LoLEvent & {
    EventName: EventName.INHIB_RESPAWN_SOON
    /**Name of the inhib that is respawning*/
    InhibRespawningSoon: string
}

/**
 * Triggers on each voidgrub.
 */
export type HordeKill = LoLEvent & {
    EventName: EventName.HORDE_KILL
    KillerName: string
    Assisters: string[]
    stolen: boolean
}

export type GameEnd = LoLEvent & {
    EventName: EventName.GAME_END
    Result: "Win" | "Lose"
}

