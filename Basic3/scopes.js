 //*******Scopes*********

 //****interview asked question the (gloabl scope) in code environment run usin node is different and the (gloabl scope) used in browser console is different  */


 // curly braces {} => this is called scope when it comes with function, if-else& loops then only it will considered  as scope,it also comes with object but that is not scope that is object declaration

 //we do not use (var)because its scope is not limited to block it can override the value of varibale if declared inside the (block) with variable value declared globally 


if (true) //In this scenario whatever written inside if is called (block scope) and whatever written outside if is called (Global scope ) 
{
    let a = 10
    const b = 20
    var c = 30
    
}
// console.log(a);//ReferenceError:(a is not defined) because a is defined inside if block and we are accesing it outside if block
// console.log(b);//ReferenceError:(b is not defined) because b is defined inside if block and we are accesing it outside if block
//console.log(c);//It will print 30

//any value declared in (global scope) is available for (block scope) but any value declared inside (block scope) is not available globally its scope is within that block given example below
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);    
}

// console.log(a);

//************Scopes in function inside function************

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//it will give error bcz parent function (one) cannot access child fuctions (two) variable but child can access parent variable bcz it is gloabl scope for child

     two()

}
 one()// here it will print "hitesh" only when we will call nested function(one, two) at same time but if we donot not call function one or two it will not give any result 


 
//************Scopes using if-else************

 if (true) //true is wriiten only for going inside the loop bcz donot have any condition
    {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);//online this line will get executed and will give result "hitesh youtube"
    }
    // console.log(website);//this will give error bcz accessed outside scope
}

// console.log(username);//this will also give error bcz accessed outside scope


// ++++++++++++++++++ interesting ++++++++++++++++++

//we can call function before defining it when not stored in any varibale 
console.log(addone(5))//here it will not give any error

function addone(num){
    return num + 1
}



addTwo(5)//here it will give {ReferenceError: Cannot access 'addTwo' before initialization}
const addTwo = function(num){
    return num + 2
}