type AnimalType = 'dog' | 'cat';

export abstract class Base {
    private _imgUrl: string;
    private _type: AnimalType;
    private _name: string;

    private _like = false;
    private _dislike = false;

    public abstract getPropToDisplay(): {[key: string]: any }[];

    constructor(source?: any) {
        this._imgUrl = source?.image_link;
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
    set like(value: boolean) {
        this._like = value;
        this._dislike = false;
    }

    get dislike(): boolean {
        return this._dislike;
    }
    set dislike(value: boolean) {
        this._dislike = value;
        this._like = false;
    }

}