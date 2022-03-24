import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";
import { SavingsAccount } from "./SavingsAcccount.js";
import { SalaryAccount } from "./SalaryAccount.js";

//We create modules to share code between the different files on my system, helping to organize it

const client1 = new Client("Melissa", 1234567890);

// JS is an open scope language and therefore it is possible 
// to visualize any attribute or property of our class


const checkingAccount1 = new CheckingAccount(client1, 4003);
const savingsAccount1 = new SavingsAccount(50, client1, 4004);
const salaryAccount = new SalaryAccount(client1);

salaryAccount.deposit(10);
salaryAccount.withdraw(2);

console.log(salaryAccount.balance);


