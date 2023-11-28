import { Vehicle } from "../vehicle/vehicle";
import { CarFactory } from '../factories/car-factory';
import { BicycleFactory } from "../factories/bicycle-factory";
import { randomNumbers } from "../utils/random-numbers";

export function randomCarAlgorithm(): Vehicle {
    const carFactory = new CarFactory();
    const biclyceFactory = new BicycleFactory();

    const car1 = carFactory.getVehicle('Golf');
    const car2 = carFactory.getVehicle('Focus');
    const bicycle = biclyceFactory.getVehicle('Caloi');

    const vehicles = [car1, car2, bicycle];

    return vehicles[randomNumbers(vehicles.length)];
}