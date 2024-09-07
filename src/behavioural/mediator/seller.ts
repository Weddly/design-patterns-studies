import { Mediator } from "./mediator";
import { SellerProduct } from "./seller-product";

export class Seller {
    private products: SellerProduct[] = [];
    private mediator?: Mediator;

    showProducts(): void {
        this.products.forEach(p => console.log(p.id, p.name, p.price));
    }

    addProduct(...products: SellerProduct[]): void {
        products.forEach((p) => this.products.push(p));
    }

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    sell(id: string): SellerProduct | void {
        const productIndex = this.products.findIndex(p => p.id === id);

        if (productIndex === -1) return;

        const product = this.products.splice(productIndex, 1);

        return product[0];
    }
}