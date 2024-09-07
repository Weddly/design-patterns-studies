import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

seller1.addProduct({ id: '1', name: 'T-shirt', price: 49.9 })
seller1.addProduct({ id: '2', name: 'Pen', price: 2.9 })
seller1.addProduct({ id: '3', name: 'Skirt', price: 29.9 })

seller2.addProduct({ id: '4', name: 'Car', price: 49000.9 })
seller2.addProduct({ id: '5', name: 'Bike', price: 2000.9 })

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();

buyer.buy('3');
buyer.buy('4');
buyer.viewProducts();
