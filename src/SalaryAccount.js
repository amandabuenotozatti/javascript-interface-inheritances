import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor(client) {
        super(0, client, 1000);
    }
    
    withdraw(value) {
        let fee = 1;
        return this._withdraw(value, fee);
    }
}