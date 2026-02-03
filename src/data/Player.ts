import {PlayerRunes} from "./runes/PlayerRunes.js";
import {SummonerSpells} from "./SummonerSpells.js";
import {Item} from "./Item.js";

export type Player = {
    championName: string;
    isBot: boolean;
    isDead: boolean;
    items: Item[];
    level: number;
    position: string;
    rawChampionName: string;
    respawnTimer: number;
    runes: PlayerRunes;
    scores: PlayerScores;
    skinID: number;
    summonerName: string;
    summonerSpells: SummonerSpells;
    team: string;
};

export type PlayerScores = {
    assists: number;
    creepScore: number;
    deaths: number;
    kills: number;
    wardScore: number;
};