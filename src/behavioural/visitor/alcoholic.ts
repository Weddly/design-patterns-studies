import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { VisitableProduct } from "./visitable-product";

export class Alcoholic extends VisitableProduct {

    constructor(protected price: number) {
        super('Alcoholic', price);
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForAlcoholic(this);
    }
}