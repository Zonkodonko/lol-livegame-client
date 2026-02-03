import type { ActivePlayerMin } from "./ActivePlayerMin.js";
import type { GameData } from "./GameData.js";
import type { Player } from "./Player.js";
import type { LoLEvent } from "./LoLEvents.js";

export type LiveClientData = {
  activePlayer: ActivePlayerMin;
  allPlayers: Player[];
  events: {
    Events: LoLEvent[];
  };
  gameData: GameData;
};
