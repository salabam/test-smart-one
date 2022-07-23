import { Base } from "./base";

export class Cat extends Base {

    private _playfulness: number;
    private _grooming: number;

    constructor(source?: Partial<Cat>) {
        super(source);
        this._playfulness = source?.playfulness;
        this._grooming = source?.grooming;
    }

    get playfulnessConverted(): string {
        return '';
    }
    get playfulness(): number {
        return this._playfulness
    }

    get groomingConverted(): string {
        return '';
    }
    get grooming(): number {
        return this._grooming;
    }
}