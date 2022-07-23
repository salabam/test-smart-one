import { Base } from "./base";

export class Dog extends Base {

    private _energy: number;
    private _barking: number;

    constructor(source?: Partial<Dog>) {
        super(source);
        this._energy = source?.energy;
        this._barking = source?.barking;
    }

    get energyConverted(): string {
        return '';
    }
    get energy(): number {
        return this._energy
    }

    get barkingConverted(): string {
        return '';
    }
    get barking(): number {
        return this._barking;
    }
}