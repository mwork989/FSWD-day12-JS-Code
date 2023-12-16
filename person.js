class Person{
    constructor(name,age){
        this.name = name; // 'this' refers to the instance of the class
        this.age = age;
    }
    describe() {
        return `${this.name} is ${this.age} years old.`; // Accessing properties using 'this
        
    }
    celebrateBirthday() {
        this.age += 1; // Modifying a property using 'this'
        console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
    }
}

const alice = new Person('Alice', 30);
const max = new Person('max', 20);
const bob = new Person('Bob', 25);

console.log(alice.describe());
console.log(max.describe());
console.log(bob.describe());
