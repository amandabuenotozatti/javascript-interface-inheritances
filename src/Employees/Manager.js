import { Employee } from "./Employee.js";

export class Manager extends Employee {
    constructor(name, nin, salary) {
        super(name, nin, salary);
        this._bonus = 1.1;
    }

}