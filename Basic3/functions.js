//*******************Functions***************** */
//Function definition given below  //Function syntax=> function functionName(){}
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()//here sayMyName is reference and when we add parenthesis() it becomes execution 

// function addTwoNumbers(number1, number2)//whatever passed in function definition is called parameters
// {

//     console.log(number1 + number2);
// }
// const result=addTwoNumbers(3,4)//whatever passed when calling the function is called arguments
// console.log(result);//will give undefined beacause function is not returning anything

function addTwoNumbers(number1, number2)
{
    let result= number1 + number2
    return result
    console.log("hello");//this line will never be excecuted bcz once function has return something it will stop//It can be printed if it is written above return 
}
// const result=addTwoNumbers(3,4)
// console.log(result);

// easy way to write function and return value
function addTwoNumbers(number1, number2)
 {

     return (number1 + number2)
 }

//  const result=addTwoNumbers(3,4)
// console.log(result);

function loginUserMessage(username){
    return `${username} just logged in`
}

loginUserMessage("hitesh")//function will not run bcz we have not asked it to log or stored it in any variable
// console.log(loginUserMessage("ankush"));//now it will run
// console.log(loginUserMessage())//if you have passed empty string it will print undefined just logged in 
// the correct form to check whether argument is empty is given below

function loginUserMessage(username){
    if(!username)//! symbol converts true to false and false to true
    {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//  console.log(loginUserMessage())//if not passed anything it will give output 
 //PLease enter a username  //for line 52
 //undefined //for line 55

//  function loginUserMessage(username = "anky") //"anky" is default value bcz of which the function will not execute the if part and always give anky just logged in if user does not pass any argument
//  {
//     if(!username)
//     {
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

//  console.log(loginUserMessage())//will print anky just logged in if user does not pass any argument
//  console.log(loginUserMessage("ankush"))//will print ankush just logged in 

function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(20))
// console.log(calculateCartPrice(200, 400, 500, 2000))// what if user passes multiple values in arguments in that case will use rest(...)operator in function definition with parameters

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(20,34,45,67))//here it will store the value in array like this [ 20, 34, 45, 67 ]

//Another way
function calculateCartPrice(val1,val2,...num1)//by doing this val1 and val2 will store first two arguments passed during function call and rest all will be stored by num1 in the array
{
    return num1
}
// console.log(calculateCartPrice(20,34,45,67))// will give [ 45, 67 ]

//*****************objects passed in  functions****************

const user = {
    username: "Ankush",
    price: 199
}

function handleObject(anyobject)//here we have passed anyobject in generic so that we can take any objects not specifically user object which is declared above
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)//will print (Username is Ankush and price is 199) we have to pass object name as a argument in function call

//we can pass object like this as well
// handleObject({
//     username: "sam",
//     price: 399
// })//this will also give same result (Username is sam and price is 399)


//*****************Array passed in  functions****************

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)//here we have passed getArray in generic so that we can take any array not specifically myNewArray which is declared above
{
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));//will return second value of array which is 400
console.log(returnSecondValue([200, 400, 500, 1000])); //(we can also pass array like this just we did in object during function call) it will also return second value of array which is 400
