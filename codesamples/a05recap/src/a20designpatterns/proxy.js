class RealObject {
    constructor(name) {
        this.name = name;
    }

    request() {
        console.log(`Request handled by RealObject: ${this.name}`);
    }
}

class Proxy {
    constructor(realObject) {
        this.realObject = realObject;
    }

    request() {
        this.logAccess();
        this.realObject.request();
    }

    logAccess() {
        console.log(`Accessing the real object: ${this.realObject.name}`);
    }
}

// Usage
const realObject = new RealObject("MyObject");
const proxy = new Proxy(realObject);

proxy.request();

// Output:
// Accessing the real object: MyObject
// Request handled by RealObject: MyObject
