import { Manager } from "./Employees/Manager.js";
import { Principal } from "./Employees/Principal.js";
import { AuthenticationSystem } from "./AuthenticationSystem.js";
import { Client } from "./Client.js";

const principal = new Principal("Amanda", 12345678, 5000);
principal.registerPassword("222");
const principalLogged = AuthenticationSystem.login(principal, "222");

const manager = new Manager("Arthur", 55555555, 3000);
manager.registerPassword("111");
const managerLogged = AuthenticationSystem.login(manager, "111");

//console.log(principalLogged, managerLogged);

const client = new Client("Rebeca", 33333333333, "777");
client.registerPassword("777");
const clientLogged = AuthenticationSystem.login(client, "777");
console.log(clientLogged);