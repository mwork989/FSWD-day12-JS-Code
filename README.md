NOTE

In JavaScript, a class is a blueprint for creating objects with pre-defined properties and methods. Introduced in ECMAScript 2015 (ES6), classes in JavaScript are primarily syntactical sugar over JavaScript's existing prototype-based inheritance and do not introduce a new object-oriented inheritance model.

The constructor method is a special method for creating and initializing objects created with a class. There can only be one constructor method in a class.


When you create a new instance of a class in JavaScript, the constructor method is automatically called during the initialization of the new object. This is a fundamental aspect of how classes and constructors work in JavaScript and many other object-oriented programming languages.


The this keyword in JavaScript classes refers to the current instance of the class
It's used to access properties and methods of the class within its scope.

When you create a new instance of a class, this represents that specific instance, allowing each instance to have its own set of properties and methods.



Arrow Function:
----------------
Introduced in ES6.
Concise syntax.
No need for the function keyword.
Suitable for short expressions.


normal function vs arrow function example1
-------------------------

function normalFunction(arg1) {
    return arg1 +1;
}

const arrowFunction = arg1 => arg1 + 1;


normal function vs arrow function example2
-------------------------

function normalFunction(arg1, arg2) {
    return arg1 + arg2;
}

const arrowFunction = (arg1, arg2) => arg1 + arg2;


exmaple3  
--------
const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(num => num + 1);  //2,3,4,5,6


example4
-----------------
const greet = () => "hello world"

console.log(greet()); // hello world

example5
---------------

const square = x => x * x;
console.log(square(5))  //25

example6
---------------
const add = (a, b) => a + b;
console.log(add(3, 4))  //7

exmple7 - Multi-line body statements
------------------
const largestNumber = (a, b) => {
    if(a>b){
        return a; 
    }else{
        return b
    }

  // return  (a>b) ? a : b 
};

console.log(largerNumber(5, 3)); 

example 8
--------------------
const createPerson = (name, age) => ({ name: name, age: age });


Is javascript pass by value or pass by reference?
-----------------------
Pass by Value (Primitive Types)
-----------------
function changeValue(val){
    val = 99; // Only changes the local copy
}

let num =11;
changeValue(num);
console.log(num) // outputs 11


Pass by Reference-Like Behavior (Objects)

function updateObject(obj){
   obj.name = "updated name"
}
const myObj = { name: "Original Name" };
updateObject(myObj);
console.log(myObj.name);  // Changes reflected outside the function