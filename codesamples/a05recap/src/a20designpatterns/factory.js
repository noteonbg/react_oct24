// Base class
class Product {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return `Product: ${this.name}`;
    }
}

// Concrete Product A
class ProductA extends Product {
    constructor() {
        super('Product A');
    }
}

// Concrete Product B
class ProductB extends Product {
    constructor() {
        super('Product B');
    }
}

// Factory
class ProductFactory {
    static createProduct(type) {
        switch (type) {
            case 'A':
                return new ProductA();
            case 'B':
                return new ProductB();
            default:
                throw new Error('Unknown product type');
        }
    }
}

// Usage
const productA = ProductFactory.createProduct('A');
console.log(productA.describe()); // Output: Product: Product A

const productB = ProductFactory.createProduct('B');
console.log(productB.describe()); // Output: Product: Product B

// Trying to create an unknown product type
try {
    const unknownProduct = ProductFactory.createProduct('C');
} catch (error) {
    console.error(error.message); // Output: Unknown product type
}
