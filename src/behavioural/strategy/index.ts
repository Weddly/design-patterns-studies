import { ECommerceShoppingCart } from "./shopping-cart/eccomerce-shopping-cart";
import { DefaultDiscount } from "./shopping-cart/strategies/default-discount";
import { NewDiscount } from "./shopping-cart/strategies/new-discount";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();

shoppingCart.addProduct({ name: 'Product 1', price: 50 });
shoppingCart.addProduct({ name: 'Product 2', price: 50 });
shoppingCart.addProduct({ name: 'Product 3', price: 200 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());

shoppingCart.discount = new NewDiscount();
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
