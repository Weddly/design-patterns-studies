import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { VisitableProduct } from "./visitable-product";

export class Cigarrete extends VisitableProduct {
    constructor(protected price: number) {
        super('Cigarrete', price);
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForCigarrete(this);
    }
}