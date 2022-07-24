import { Base } from "./base";

export class Dog extends Base {

    private _energy: number;
    private _barking: number;
    private _drooling: number;

    constructor(source?: Partial<Dog>) {
        super(source);
        this._energy = source?.energy;
        this._barking = source?.barking;
        this._drooling = source?.drooling;
    }

    get energy(): number {
        return this._energy
    }

    get barking(): number {
        return this._barking;
    }

    get drooling(): number {
        return this._drooling;
    }

    public getPropToDisplay(): { [key: string]: any; }[] {
        const prop = [];
        prop.push({ label: 'Drooling', value: this.drooling })
        prop.push({ label: 'Energy', value: this.energy });
        prop.push({ label: 'Barking', value: this.barking });
        return prop;
    }
}