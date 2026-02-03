import type { ActivePlayerMin } from "./ActivePlayer.js";
import type { GameData } from "./GameData.js";
import type { Player } from "./Player.js";
import type { LoLEvent } from "./LoLEvents.js";

/**
 * Response from requesting all game data.
 */
export type LiveClientData = {
  activePlayer: ActivePlayerMin;
  allPlayers: Player[];
  events: {
    Events: LoLEvent[];
  };
  gameData: GameData;
};
