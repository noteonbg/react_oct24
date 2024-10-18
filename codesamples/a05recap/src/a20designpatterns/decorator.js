// Base component
class Coffee {
    cost() {
        return 5; // Base cost of coffee
    }

    getDescription() {
        return 'Coffee';
    }
}

// Decorator base class
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost();
    }

    getDescription() {
        return this.coffee.getDescription();
    }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 1; // Add cost for milk
    }

    getDescription() {
        return this.coffee.getDescription() + ', Milk';
    }
}

class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.5; // Add cost for sugar
    }

    getDescription() {
        return this.coffee.getDescription() + ', Sugar';
    }
}

// Usage
let myCoffee = new Coffee();
console.log(myCoffee.getDescription()); // Output: Coffee
console.log(myCoffee.cost()); // Output: 5

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.getDescription()); // Output: Coffee, Milk
console.log(myCoffee.cost()); // Output: 6

myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.getDescription()); // Output: Coffee, Milk, Sugar
console.log(myCoffee.cost()); // Output: 6.5
