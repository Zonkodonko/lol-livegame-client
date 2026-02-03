//Teams
export const BLUE = 'Order'
export const RED = 'Chaos'
export const TEAM = {
    BLUE, RED
}

//Structures
export const INHIB = 'Inhib'
export const TURRET = 'Turret'

//Lanes
export const LANE_BOT = 0
export const LANE_MID = 1
export const LANE_TOP = 2

export const Lane = {
    Bot: LANE_BOT,
    Mid: LANE_MID,
    Top: LANE_TOP
}

//Turret positions
export const T_POSITION_OUT = 3
export const T_POSITION_BASE = 2
export const T_POSITION_INHIB = 1

export type TeamName = 'Order' | 'Chaos';

export const NAME_PROXY = "{type}_T{team}_L{lane}_P{position}_{native id}"

export enum DragonType {
    AIR = 'Air',
    EARTH = 'Earth',
    FIRE = 'Fire',
    WATER = 'Water',
    HEXTECH = 'Hextech',
    CHEMTECH = 'Chemtech',
    ELDER = 'Elder'
}


