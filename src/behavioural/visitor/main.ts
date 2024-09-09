import { Alcoholic } from "./alcoholic";
import { BrazilTaxVisitor } from "./brazil-tax-visitor";
import { Cigarrete } from "./cigarrete";
import { Food } from "./food";
import { UsTaxVisitor } from "./us-tax-visitor";

const food = new Food(10);
const cigarrete = new Cigarrete(5);
const alcoholicBeverage = new Alcoholic(7);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new UsTaxVisitor();

const cart = [food, cigarrete, alcoholicBeverage];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithTaxesBrazil = cart.reduce((sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum, 0);
const totalWithTaxesUs = cart.reduce((sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum, 0);
console.log(total);
console.log(totalWithTaxesBrazil);
console.log(totalWithTaxesUs);
