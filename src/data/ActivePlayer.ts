import type { ChampionAbilities } from "./ChampionAbilities.js";
import type { ChampionStats } from "./ChampionStats.js";
import type { FullRunes } from "./runes/FullRunes.js";

/**
 * Type that is used for the active player in the all-game-data endpoint.
 */
export type ActivePlayerMin = {
    abilities: ChampionAbilities;
    championStats: ChampionStats;
    currentGold: number;
    fullRunes: FullRunes;
    level: number;
    summonerName: string;
};

export type ActivePlayer = ActivePlayerMin & {
    riotId: string;
    riotIdGameName: string;
    riotIdTagLine: string;
}