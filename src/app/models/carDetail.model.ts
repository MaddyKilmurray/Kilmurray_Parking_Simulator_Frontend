export class CarDetail {
    public get qrCode(): string {
        return this._qrCode;
    }
    public set qrCode(value: string) {
        this._qrCode = value;
    }
    public get licencePlate(): string {
        return this._licencePlate;
    }
    public set licencePlate(value: string) {
        this._licencePlate = value;
    }

    constructor(
        private _licencePlate: string,
        private _qrCode: string
    ) {

    }
}