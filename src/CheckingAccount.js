import { Client } from "./Client.js";

export class CheckingAccount {
    static accountNumber = 0;
    agency;
    _client;
    _balance = 0;
    //By default in JS we use the "_" to indicate that an attribute is private and should not be changed.


    set cliente(newValue) {
        if(newValue instanceof Client) {
            this._client = newValue;
        }
    }

    get cliente() {
        return this._client;
    }

    get saldo() {
        return this._balance;
    }

    constructor(agency, client) {
        this.agency = agency;
        this.client = client;
        CheckingAccount.accountNumber += 1;
    }

    withdraw(value) {
        if(this._balance >= value) {
            this._balance -= value;
            return value;
        }
    }

    deposit(value) {
        if(value <= 0) return;
        this._balance += value;
    }

    transfer(value, checkingAccount) {
        const amountWithdraw = this.withdraw(value);
        checkingAccount.deposit(amountWithdraw);
    }
}