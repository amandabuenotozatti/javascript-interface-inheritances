import { Account } from "./Account.js";

export class CheckingAccount extends Account {
    static accountNumber = 0;

    constructor(client, agency) {
        super(0, client, agency);
        CheckingAccount.accountNumber += 1;
    }

    withdraw(value) {
        let fee = 1.1;
        return super._withdraw(value, fee);
    }

}