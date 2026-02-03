import type { Rune } from "./Rune.js";
import type { RuneTree } from "./RuneTree.js";
import type { StatRune } from "./StatRune.js";

export type FullRunes = {
    generalRunes: Rune[];
    keystone: Rune;
    primaryRuneTree: RuneTree;
    secondaryRuneTree: RuneTree;
    statRunes: StatRune[];
};