import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprise-customer-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-customer-vehicle.factory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Dolphin', 'John');
const car2 = individualFactory.createVehicle('Ora 03', 'Helen');

car1.pickUp();
car2.pickUp();