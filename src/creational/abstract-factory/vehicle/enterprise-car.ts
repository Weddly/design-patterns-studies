import { Customer } from "../customer/customer";
import { Vehicle } from "./vehicle";

export class EnterpriseCar implements Vehicle {
    constructor(public name: string, private readonly customer: Customer) { }
    pickUp(): void {
        console.log(`${this.name} enterprise car is picking up ${this.customer.name}`)
    }
}