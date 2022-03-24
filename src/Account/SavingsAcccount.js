import { Account } from "./Account.js";

export class SavingsAccount extends Account {
    constructor(initialBalance, client, agency) {
        super(initialBalance, client, agency);
    }

    withdraw(value) {
        let fee = 1.02;
        return this._withdraw(value, fee);
    }
}