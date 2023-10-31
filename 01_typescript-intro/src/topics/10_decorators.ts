function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'New property';
        hello = 'Hello World';
    }
}

@classDecorator
class SuperCalss {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hello World');

    }
}

console.log(SuperCalss);

const myClass = new SuperCalss();
console.log(myClass);