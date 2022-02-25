export class Client {
    name;
    _nin;
    id;

    get nin() {
        return this._nin;
    }

    constructor(name, nin) {
        this.name = name;
        this._nin = nin;
    }
}
