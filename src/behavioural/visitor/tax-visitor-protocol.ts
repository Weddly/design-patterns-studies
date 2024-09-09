import { Alcoholic } from './alcoholic';
import { Cigarrete } from "./cigarrete";
import { Food } from "./food";

export interface TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number;
    calculateTaxesForCigarrete(cigarrete: Cigarrete): number;
    calculateTaxesForAlcoholic(alcoholic: Alcoholic): number;
}