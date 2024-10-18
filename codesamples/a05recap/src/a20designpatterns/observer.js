class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received data: ${data}`);
    }
}

// Usage
const subject = new Subject();

const observerA = new Observer('Observer A');
const observerB = new Observer('Observer B');

subject.addObserver(observerA);
subject.addObserver(observerB);

subject.notifyObservers('Hello Observers!');

// Output:
// Observer A received data: Hello Observers!
// Observer B received data: Hello Observers!

subject.removeObserver(observerA);

subject.notifyObservers('Another message');
// Output:
// Observer B received data: Another message
