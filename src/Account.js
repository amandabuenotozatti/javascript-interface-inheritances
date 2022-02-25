export class Account {
     constructor(initialBalance, client, agency) {
        this._balance = initialBalance;
        this._client = client;
        this._agency = agency;
    }

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

    withdraw(value) {
        let fee = 1;
        return this._withdraw(value, fee);
    }


    _withdraw(value, fee) {
        const amountWithdraw = value * fee;
        if(this._balance >= amountWithdraw) {
            this._balance -= amountWithdraw;
            return amountWithdraw;
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