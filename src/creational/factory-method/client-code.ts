import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";
import { Car } from "./vehicle/car";

const fusca = new Car('Fusca');
fusca.pickUp('Joana');
fusca.stop();
console.log('---');

const carFactory = new CarFactory();
const celta = carFactory.getVehicle('Celta');
celta.pickUp('Joana');
celta.stop();
console.log('---');

const customerNames = ['Ana', 'Joana', 'Helena', 'Juca']

for (let i = 0; i < 10; i++) {
    const vehicle = randomCarAlgorithm();
    const name = customerNames[randomNumbers(customerNames.length)];
    vehicle.pickUp(name);
    vehicle.stop();
    const newCar = carFactory.pickUp(name, `New Car - ${randomNumbers(10)}`);
    newCar.stop();

    console.log('---');
}
