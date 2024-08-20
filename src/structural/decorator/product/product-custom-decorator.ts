import { ProductDecorator } from "./product-decorator";

export class ProductCustomDecorator extends ProductDecorator {
    getName(): string {
        return 'Custom ' + this.product.getName();
    }

    getPrice(): number {
        return this.product.getPrice() + 50;
    }
}