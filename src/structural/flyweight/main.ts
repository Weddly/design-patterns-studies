import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '350', 'Av Brasil', 'SP');
deliveryContext(factory, 'Joana', '11', 'Av Japão', 'SP');
deliveryContext(factory, 'Eliana', '440', 'Av Brasil', 'BH');

console.log();
console.log(factory.getLocations());
