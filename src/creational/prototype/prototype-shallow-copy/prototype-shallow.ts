export interface Prototype {
    clone(): Prototype;
}

export class Address {
    constructor(public street: string, public number: number) { }
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {

    }

    clone(): this {
        const newObj = Object.create(this);
        return newObj;
    }

    addAddress(address: Address) {
        this.addresses.push(address);

    }
}

const address1 = new Address('Av JK', 150);
const person1 = new Person('Person1', 30);
person1.addAddress(address1);
const person2 = person1.clone();

// Problem starts when you modify the Prototype value
// bc affects the clone copy too
person1.addresses[0].street = "Testing";

console.log(person2);
console.log(person2.name);
person2.name = 'Person2';
console.log(person2.name);
console.log(person2.addresses);
