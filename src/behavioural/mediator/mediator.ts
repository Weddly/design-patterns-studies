import { SellerProduct } from "./seller-product";
import { Seller } from "./seller";

export class Mediator {
    private sellers: Seller[] = [];

    addSeller(...sellers: Seller[]): void {
        sellers.forEach((s) => this.sellers.push(s));
    }

    buy(id: string): SellerProduct | void {
        let product;

        for (let i = 0; i < this.sellers.length; i++) {
            product = this.sellers[i].sell(id);

            if (product) {
                console.log('Here is your product: ', product.id, product.name, product.price);
                return;
            }
        }

        console.log('No product found for id', id);
    }

    showProducts(): void {
        this.sellers.forEach(s => s.showProducts());
    }
}