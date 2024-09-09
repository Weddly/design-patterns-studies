import { Alcoholic } from "./alcoholic";
import { Cigarrete } from "./cigarrete";
import { Food } from "./food";
import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number {
        return food.getPrice() + food.getPrice() * 0.05;
    }
    calculateTaxesForCigarrete(cigarrete: Cigarrete): number {
        return cigarrete.getPrice() + cigarrete.getPrice() * 1.5;

    }
    calculateTaxesForAlcoholic(alcoholic: Alcoholic): number {
        return alcoholic.getPrice() + alcoholic.getPrice() * 0.5;
    }

}