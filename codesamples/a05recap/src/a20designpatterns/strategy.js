// Strategy 1
class StrategyA {
    execute(data) {
        console.log(`Strategy A executed with data: ${data}`);
    }
}

// Strategy 2
class StrategyB {
    execute(data) {
        console.log(`Strategy B executed with data: ${data}`);
    }
}

// Context
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data) {
        this.strategy.execute(data);
    }
}

// Usage
const context = new Context(new StrategyA());
context.executeStrategy('Some data for A');

// Output: Strategy A executed with data: Some data for A

context.setStrategy(new StrategyB());
context.executeStrategy('Some data for B');

// Output: Strategy B executed with data: Some data for B
