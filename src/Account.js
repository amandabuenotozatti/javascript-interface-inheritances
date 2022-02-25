export class Account {
     constructor(initialBalance, client, agency) {
        this._balance = initialBalance;
        this._client = client;
        this._agency = agency;
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