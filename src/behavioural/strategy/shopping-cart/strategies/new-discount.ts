import { ECommerceShoppingCart } from "../eccomerce-shopping-cart";
import { DiscountStrategy } from "./discount.strategy";

export class NewDiscount extends DiscountStrategy {
    protected discount: number = 0;

    getDiscount(cart: ECommerceShoppingCart): number {
        const total = cart.getTotal();

        if (total >= 150) {
            this.discount = 5;
        }
        return total - total * (this.discount / 100);
    }
}