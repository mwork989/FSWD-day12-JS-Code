

class Person1{
   
    name;// Public field
    #age;// Private field

    constructor(name,age){
       this.name = name; //   just reassigns the parameter to itself
       this.#age = age; // this does not set any property on the object
    }
    describe() {
        return `${ this.name} is ${this.#age} years old.`; // 'name' and 'age' are not defined in this scope
        
    }
}


const alice = new Person1('Alice', 30);
console.log(alice.describe());
console.log(alice.nameage)
console.log(alice.age)