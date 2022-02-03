export class QRcode {
    public get code(): string {
        return this._code;
    }
    public set code(value: string) {
        this._code = value;
    }

    constructor(
        private _code: string
    ) {
    }
}