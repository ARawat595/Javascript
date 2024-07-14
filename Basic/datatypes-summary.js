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

//Javascript has dynamically typed language and from one point of view, it is good because it’s
// pretty simple to assign values to the variables

//beacuse we can assign differently values to same variable beacuse we assign value to the variable “a” without specifying its type and type of the variable will be set dynamically depending on the value that we assigned to the variable.
/*   a = "abc";  //String
     a = 10;  //Number

// https://262.ecma-international.org/5.1/#sec-11.4.3




//******************* Memory Allocation******************************* */

// Stack(Primitive) => In Stack we get copy of variable declared making changes will not make change in original value
//Example of stack

let myYoutubename = "ankush@rawat";
let anotherName = myYoutubename;


anotherName = "rawat@youtube.com"
console.log(myYoutubename);//ankush@rawat
console.log(anotherName);//rawat@youtube.com

//Heap(Non-Primitive) =>In Heap we get reference of original value defined of an object so making changes will occur in original value as well

//Example of Heap

let myOject ={
    email :"ankushr546@gmail.com",
    upi:"rawat@ybl"
}

let newObject = myObj;
newObject.email= "ankushr889@gmail.com";
console.log(myObj.email);// will give "ankushr889@gmail.com"
console.log(newObject.email);//will give "ankushr889@gmail.com"