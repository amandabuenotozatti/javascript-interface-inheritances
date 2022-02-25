import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";
import { SavingsAccount } from "./SavingsAcccount.js";

//We create modules to share code between the different files on my system, helping to organize it

const client1 = new Client("Melissa", 1234567890);

// JS is an open scope language and therefore it is possible 
// to visualize any attribute or property of our class

const checkingAccount1 = new CheckingAccount(client1, 4003);
const savingsAccount1 = new SavingsAccount(50, client1, 4004);

checkingAccount1.deposit(500);
checkingAccount1.withdraw(100);

console.log(checkingAccount1);


