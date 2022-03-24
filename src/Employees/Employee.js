export class Employee {
    constructor(name, nin, salary) {
        this._name = name;
        this._nin = nin;
        this._salary = salary;

        this._bonus = 1;
        this._password;
    }

    authenticate(password) {
        return password == this._password;
    }

    registerPassword(password) {
        this._password = password;
    }
}