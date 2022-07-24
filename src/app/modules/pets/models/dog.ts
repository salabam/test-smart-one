import { Base } from "./base";

export class Dog extends Base {

    private _energy: number;
    private _barking: number;

    constructor(source?: Partial<Dog>) {
        super(source);
        this._energy = source?.energy;
        this._barking = source?.barking;
    }

    get energy(): number {
        return this._energy
    }

    get barking(): number {
        return this._barking;
    }

    public getPropToDisplay(): { [key: string]: any; }[] {
        const prop = [];
        prop.push({ label: 'Name', value: this.name, number: false });
        prop.push({ label: 'Energy', value: this.energy, number: true });
        prop.push({ label: 'Barking', value: this.barking, number: true });
        return prop;
    }
}