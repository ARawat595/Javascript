const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//whenever we want to refer current context we use (this) keyword here current context is whatever inside object scope { } and (this) keyword is referring to it
        //context =>It means the values which variable is holding currently

    //    /*we can check what this key word is reffering to using*/console.log(this);
        
    }

}
//user.welcomeMessage()// will print (hitesh , welcome to website)

//user.username = "sam"// suppose some change the object variable value outside object and then printng its method //it will run and the result will be 
//user.welcomeMessage()//(sam , welcome to website)// here now (this) keyword is referring to changed current context 

// /*but what is we print this outside the scope*/console.log(this);//(will give current context as => {} which is empty object )bcz we are in node environment 

 /*But if we will print same thing */// console.log(this); /* inside a web browser it will give  window object that is the reason we can use window events like (click, capture ) *//*This is bcz earlier the only way to execute javscript is using browser, and the engine which runs javascript was inside browser */
 /*Now engines has become standalone some of which are named as Node, dino */


//+++++++++One Way ++++
 
//  function chai(){
//     console.log(this);//when we print this inside any function in node environment we get multiple values
// }
// chai()

//+++++++++Second Way ++++
//  function chai(){
//     let username = "hitesh"  
//     console.log(this.username);//will give (Undefined) /*which means we are not able to use(this) keyword inside function it is only working inside object */
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);//will give same (Undefined) /*In case if the function is stored in any variable  */
// }
// chai()


//***Arrow Function declaration ******* */

const chai =  () => {
    let username = "hitesh"
    console.log(this);//if we print only this keyword inside function it 
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

