class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance; // Return the existing instance
        }
        Singleton.instance = this; // Store the instance
        this.state = {}; // Example state
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }
}

// Usage
const singletonA = new Singleton();
singletonA.setState({ value: 42 });

const singletonB = new Singleton();
console.log(singletonB.getState()); // Output: { value: 42 }

// Check if both instances are the same
console.log(singletonA === singletonB); // Output: true
