import { ECommerceShoppingCart } from "../eccomerce-shopping-cart";

export class DiscountStrategy {
    protected discount: number = 0;

    getDiscount(cart: ECommerceShoppingCart): number {
        return cart.getTotal();
    }
}