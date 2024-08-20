import { ProductCustomDecorator } from "./product/product-custom-decorator";
import { ProductDecorator } from "./product/product-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const shirt = new TShirt();
const decoratedShirt = new ProductStampDecorator(shirt);
const doubleDecoratedShirt = new ProductStampDecorator(decoratedShirt);
const customDecoratedShirt = new ProductCustomDecorator(doubleDecoratedShirt);
console.log(shirt.getName());
console.log(shirt.getPrice());
console.log(decoratedShirt.getName());
console.log(decoratedShirt.getPrice());
console.log(doubleDecoratedShirt.getName());
console.log(doubleDecoratedShirt.getPrice());
console.log(customDecoratedShirt.getName());
console.log(customDecoratedShirt.getPrice());