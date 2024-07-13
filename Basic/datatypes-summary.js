//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false symbol recognizes same value uniquely

// Reference (Non primitive)
//return type of all Non primitive datatypes is object only.
//In case of Function it is called Object function

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];//declaring array
let myObj = {//declaring objects
    name: "hitesh",
    age: 22,
}

//declaring functions

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);//symbol
console.log(typeof heros);//object
console.log(typeof myFunction);//function
console.log(typeof outsideTemp);//object
console.log(typeof myObj);//object

//Javascript has dynamically typed language and from one point of view, it is good because it’s pretty simple to assign values to the variables

// https://262.ecma-international.org/5.1/#sec-11.4.3