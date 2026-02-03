

export type SummonerSpell = {
    /** Translated name */
    displayName: string;
    rawDescription: string;
    rawDisplayName: string;
};

export type SummonerSpells = {
    summonerSpellOne: SummonerSpell;
    summonerSpellTwo: SummonerSpell;
};