// Command interface
class Command {
    execute() {}
}

// Concrete Command
class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}

// Receiver
class Light {
    turnOn() {
        console.log('The light is on.');
    }

    turnOff() {
        console.log('The light is off.');
    }
}

// Invoker
class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}

// Usage
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton(); // Output: The light is on.

remote.setCommand(lightOff);
remote.pressButton(); // Output: The light is off.
