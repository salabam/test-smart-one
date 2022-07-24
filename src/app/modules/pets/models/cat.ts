import { Base } from "./base";

export class Cat extends Base {

    private _playfulness: number;
    private _grooming: number;
    private _meowing: number;

    constructor(source?: Partial<Cat>) {
        super(source);
        this._playfulness = source?.playfulness;
        this._grooming = source?.grooming;
        this._meowing = source?.meowing;
    }

    get playfulness(): number {
        return this._playfulness
    }

    get grooming(): number {
        return this._grooming;
    }

    get meowing(): number {
        return this._meowing;
    }

    public getPropToDisplay(): { [key: string]: any; }[] {
        const prop = [];
        prop.push({ label: 'Meowing', value: this.meowing })
        prop.push({ label: 'Grooming', value: this.grooming });
        prop.push({ label: 'Playfulness', value: this.playfulness });
        return prop;
    }
}