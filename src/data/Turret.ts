import {NAME_PROXY, TeamName} from "./Constants.js";

/**
 * Extract information from a turret name
 */
export class Turret {
    public readonly name: string
    public readonly id: string
    public readonly lane: number
    public readonly position: number
    public readonly team: TeamName

    /**
     * Creates a new Turret instance
     * @param name in format of Turret_T{team}_{lane}_{position}_{id}
     * @see NameConstants
     */
    constructor(name: string) {
        if (!name.startsWith('Turret')) {
            throw new Error(`Invalid turret name: ${name}. Should follow format: ${NAME_PROXY.replace('{type}', 'Turret')}`)
        }
        this.name = name;

        const parts = name.split('_')
        this.team = parts[1].substring(1) as TeamName
        this.lane = parseInt(parts[2][1])
        this.position = parseInt(parts[3][1])
        this.id = parts[4]
    }

    /**
     * Checks if the turret is a nexus turret.
     */
    isNexusTurret(): boolean {
        return this.position > 3;
    }
}