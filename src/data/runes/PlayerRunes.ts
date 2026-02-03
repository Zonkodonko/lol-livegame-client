import type { Rune } from "./Rune.js";
import type { RuneTree } from "./RuneTree.js";
import {StatRune} from "./StatRune.js";

export type PlayerRunes = {
    keystone: Rune;
    primaryRuneTree: RuneTree;
    secondaryRuneTree: RuneTree
};

export type ActivePlayerRunes = PlayerRunes & {
    /** no idea what this is */
    generalRunes: Rune[],

    statRunes: StatRune[]
};