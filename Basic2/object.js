//***************Object************************** */

//creating Objects 
//1)=> when we create Object using constructor then (Singleton object) is created
/*when we create Object like*/ Object.create /* this is called constructor way*/


//2)=> when we create Object using Literals no singleton is created

const mySym = Symbol("key1")//declaring symbol

const JsUser = {
    name: "Ankush",
    "full name": "Ankush Rawat",
    [mySym]: "mykey1",//correct way of declaring symbol inside object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)// to access object we use (.) but, what if we want to access full name which is declared as above in string unable to acces using (.), so coorect way to access object is using [] brackets like below 

// console.log(JsUser["email"])//prints hitesh@google.com

// console.log(JsUser["full name"])// prints Ankush Rawat

//****Asked in Interview to decalre a symbol and use it as key in object and print it *********

console.log(JsUser[mySym])//accessing symbol in this way
//[Symbol(key1)]: 'mykey1' shows like this inside object

// to change value of object 
JsUser.email="ankushrawat@youtube.com" 
// console.log(JsUser["email"]);
// suppose we wwant to freeze object so that no one can maake any changes 
// Object.freeze(JsUser)

// JsUser.email="ankushrawat@ychatgpt.com" 
//  console.log(JsUser["email"]);unable to change as objet is freezed
// console.log(JsUser)

JsUser.greet = function(){
     console.log("hello javascript"); 
}

JsUser. greettwo= function(){
    console.log(`Hello JS user, ${this.name}`); //here we use backtakes (``) which is called string interpolation this refers to object and .key  to access 
}
console.log(JsUser.greet);//function is not executed, it returns function reference[Function (anonymous)]
console.log(JsUser.greet());//prints hello javascript
console.log(JsUser.greettwo());// prints Hello JS user, Hitesh