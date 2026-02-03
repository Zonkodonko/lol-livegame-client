import {Agent, request} from "undici";
import {RIOT_CERT} from "../resources/riotgames.pem.js";
import {LoLEvent} from "../data/LoLEvents.js";
import {LiveClientData} from "../data/LiveData.js";
import {ActivePlayer} from "../data/ActivePlayer.js";
import {ChampionAbilities} from "../data/ChampionAbilities.js";
import {ActivePlayerRunes, PlayerRunes} from "../data/runes/PlayerRunes.js";
import {Player, PlayerScores} from "../data/Player.js";
import {SummonerSpells} from "../data/SummonerSpells.js";
import {Item} from "../data/Item.js";


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

export const GameClient = {
    /**
     * Custom request to get live client data
     * @param uri not host. Just the path. Example: '/liveclientdata/allplayerdata'
     */
    requestLiveApi: (uri: string) => request(`${HOST}${uri}`, GET_REQUEST_OPTIONS).then(res => res.body.json(), err => {
        console.error(`Error fetching live client "${HOST + uri}" Cause: ${err.message}`);
        throw err
    }),
    getAllGameData: () => GameClient.requestLiveApi('/liveclientdata/allgamedata').then((res: any) => res as LiveClientData),
    getActivePlayer: () => GameClient.requestLiveApi('/liveclientdata/activeplayer').then((res: any) => res as ActivePlayer),
    getActivePlayerName: () => GameClient.requestLiveApi('/liveclientdata/activeplayername').then((res: any) => res.Name),
    getActivePlayerAbilities: () => GameClient.requestLiveApi('/liveclientdata/activeplayerabilities').then((res: any) => res as ChampionAbilities),
    getActivePlayerRunes: () => GameClient.requestLiveApi('/liveclientdata/activeplayerrunes').then((res: any) => res as ActivePlayerRunes),
    getAllPlayers: () => GameClient.requestLiveApi('/liveclientdata/playerlist').then((res: any) => res as Player[]),
    getPlayerScore: (riotId: string) => GameClient.requestLiveApi(`/liveclientdata/playerscore?riotId=${riotId}`).then((res: any) => res as PlayerScores),
    getPlayerSummonerSpells: (riotId: string) => GameClient.requestLiveApi(`/liveclientdata/playersummonerspells?riotId=${riotId}`).then((res: any) => res as SummonerSpells),
    getPlayerMainRunes: (riotId: string) => GameClient.requestLiveApi(`/liveclientdata/playermainrunes?riotId=${riotId}`).then((res: any) => res as PlayerRunes),
    getPlayerItems: (riotId: string) => GameClient.requestLiveApi(`/liveclientdata/playeritems?riotId=${riotId}`).then((res: any) => res as Item[]),

    /**
     * Get all events from the game. Result differs depending on if you are spectator or player. (Spectator gets less events)
     */
    getEvents: () => GameClient.requestLiveApi('/liveclientdata/eventdata').then((res: any) => (res.Events ?? []) as LoLEvent[]),


}
