//*********truthy and falsy */

// types of falsy values(means which are assumed false values)

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// types of truthy values(means which are assumed true values)

// "0", 'false', " ", [], {}, function(){}

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


/* if (userEmail.length === 0) // this is corrrect way to check array is empty .length property is used 
{
     console.log("Array is empty");
}    */

/* 
     const emptyObj = {}

if (Object.keys(emptyObj).length === 0) //this is corrrect way to check object is empty .length property is used 
{
    console.log("Object is empty");
}  */

 // ***************Nullish Coalescing Operator (??): basically it works on null & undefined

 //whenever we call from database generally we dont get response directly instead we get two values and chances are that we receive null, undefined or even no-response in that case our complete code structure will get disturbed for that case this operator is created 
 //basically this is fallback to handle errors

let val1;
// val1 = 5 ?? 10 //it will print 5
// val1 = null ?? 10 //it will print 10
// val1 = undefined ?? 15 //it will print 15
val1 = null ?? 10 ?? 20 //it will print 10

console.log(val1);

// Terniary Operator is different from nullish coalescing operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
