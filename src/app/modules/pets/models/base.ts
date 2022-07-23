type AnimalType = 'dog' | 'cat';

export class Base {
    private _imgUrl: string;
    private _type: AnimalType;
    private _name: string;

    private _like = false;
    private _dislike = false;

    constructor(source?: Partial<Base>) {
        this._imgUrl = source?.imgUrl;
        this._type = source?.type;
        this._name = source?.name;
    }

    get imgUrl(): string {
        return this._imgUrl;
    }

    get type(): AnimalType {
        return this._type;
    }

    get name(): string {
        return this._name;
    }

    get like(): boolean {
        return this._like;
    }
    public setLike(): void {
        this._like = true;
        this._dislike = false;
    }

    get dislike(): boolean {
        return this._dislike;
    }
    public setDislike(): void {
        this._dislike = true;
        this._like = false;
    }

}