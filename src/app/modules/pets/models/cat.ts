import { Base } from "./base";

export class Cat extends Base {

    private _playfulness: number;
    private _grooming: number;

    constructor(source?: Partial<Cat>) {
        super(source);
        this._playfulness = source?.playfulness;
        this._grooming = source?.grooming;
    }

    get playfulness(): number {
        return this._playfulness
    }

    get grooming(): number {
        return this._grooming;
    }

    public getPropToDisplay(): { [key: string]: any; }[] {
        const prop = [];
        prop.push({ label: 'Name', value: this.name, number: false });
        prop.push({ label: 'Grooming', value: this.grooming, number: true });
        prop.push({ label: 'Playfulness', value: this.playfulness, number: true });
        return prop;
    }
}