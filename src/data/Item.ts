export type Item = {
    canUse: boolean,
    consumable: boolean,
    count: number,
    /** Translated name */
    displayName: string,
    itemID: number,
    price: number,
    rawDescription: string,
    rawDisplayName: string,
    slot: number,
}