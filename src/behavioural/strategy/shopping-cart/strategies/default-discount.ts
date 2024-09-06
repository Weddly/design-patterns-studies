import { ECommerceShoppingCart } from "../eccomerce-shopping-cart";
import { DiscountStrategy } from "./discount.strategy";

export class DefaultDiscount extends DiscountStrategy {
    protected discount: number = 0;

    getDiscount(cart: ECommerceShoppingCart): number {
        const total = cart.getTotal();

        if (total >= 100 && total < 200) {
            this.discount = 10;
        }


        if (total >= 200 && total < 300) {
            this.discount = 20;
        }


        if (total >= 300) {
            this.discount = 30;
        }


        return total - total * (this.discount / 100);
    }
}