export interface Prototype {
    clone(): Prototype;
}

export class Address implements Prototype {
    constructor(public street: string, public number: number) { }

    clone(): Address {
        return new Address(this.street, this.number);
    }
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {

    }

    clone(): Person {
        const newObj = new Person(this.name, this.age);
        // Solve the addresses problem with another prototype
        newObj.addresses = this.addresses.map((item) => item.clone());
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

// Lodash is a JavaScript utility library
// Method to simplify Deep Copy
// const obj = _.deepClone();