import { Employee } from "./Employee.js";

export class Principal extends Employee {
    constructor(name, nin, salary) {
        super(name, nin, salary);
        this._bonus = 2;
    }

}