// Component
export abstract class ProductComponent {
    abstract getPrice(): number;
    add(product: ProductComponent): void { };
    remove(product: ProductComponent): void { };
}

//Leaf
export class ProductLeaf extends ProductComponent {
    constructor(public name: string, public price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}

// Composite
export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];

    add(...products: ProductComponent[]): void {
        products.forEach((product) => this.children.push(product));
    };

    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product);
        if (productIndex !== -1) this.children.splice(productIndex, 1);
    };

    getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }
}

// Client
const shirt = new ProductLeaf('Shirt', 40);
const phone = new ProductLeaf('Phone', 500);
const pen = new ProductLeaf('Pen', 3);

const productBox = new ProductComposite();
productBox.add(shirt, phone, pen);

console.log(productBox);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 1_000);
const kindle = new ProductLeaf('Kindle', 350);

const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);

console.log(anotherProductBox);
console.log(anotherProductBox.getPrice());

productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());