export class Client {
    name;
    _nin;
    id;

    get nin() {
        return this._nin;
    }

    constructor(name, nin, password) {
        this.name = name;
        this._nin = nin;
        this._password = password;
    }

    authenticate(password) {
        return password == this._password;
    }

    registerPassword(password) {
        this._password = password;
    }
}
