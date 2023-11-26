const personPrototype = {
    firstName: 'Weddly',
    lastName: 'Rodrigues',
    age: 31,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Malu'; 
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());