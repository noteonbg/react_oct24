class Template {
    // The template method defines the structure of the algorithm
    execute() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }

    // Concrete steps that subclasses can override
    stepOne() {
        console.log('Default implementation of Step One');
    }

    stepTwo() {
        console.log('Default implementation of Step Two');
    }

    stepThree() {
        console.log('Default implementation of Step Three');
    }
}

// Subclass A overrides specific steps
class ConcreteClassA extends Template {
    stepOne() {
        console.log('ConcreteClassA - Step One');
    }

    stepThree() {
        console.log('ConcreteClassA - Step Three');
    }
}

// Subclass B overrides specific steps
class ConcreteClassB extends Template {
    stepTwo() {
        console.log('ConcreteClassB - Step Two');
    }

    // No need to override stepOne and stepThree
}

// Usage
const instanceA = new ConcreteClassA();
instanceA.execute();

/*
Output:
ConcreteClassA - Step One
Default implementation of Step Two
ConcreteClassA - Step Three
*/

const instanceB = new ConcreteClassB();
instanceB.execute();

/*
Output:
Default implementation of Step One
ConcreteClassB - Step Two
Default implementation of Step Three
*/
