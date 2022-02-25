import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";

//We create modules to share code between the different files on my system, helping to organize it

const client1 = new Client("Melissa", 1234567890);
const client2 = new Client("Arthur", 9999999999);
console.log(client1);
console.log(client2);

// JS is an open scope language and therefore it is possible 
// to visualize any attribute or property of our class

const checkingAccount1 = new CheckingAccount(4444, "Melissa");
const checkingAccount2 = new CheckingAccount(4444, "Arthur");
console.log(CheckingAccount.accountNumber);

checkingAccount1.deposit(100);
checkingAccount1.withdraw(50);
checkingAccount1.transfer(10, checkingAccount2);

