export type Ability = {
    /** Translated name */
    displayName: string;
    id: string;
    rawDescription: string;
    rawDisplayName: string;
};

export type ActiveAbility = Ability & {
    abilityLevel: number;
};

export type ChampionAbilities = {
    E: ActiveAbility;
    Q: ActiveAbility;
    R: ActiveAbility;
    W: ActiveAbility;
    Passive: Ability;
};