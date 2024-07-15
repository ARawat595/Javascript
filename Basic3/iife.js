// Immediately Invoked Function Expressions (IIFE)
//syntax of IIFE is ()() firts parenthesis will include function definition and second parenthesis is its execution
//when we have problem with global scope pollution to solve that problem we use IIFE

(function chai(){
    // named IIFE bcz funtion has naame
    console.log(`DB CONNECTED`);
})();//we have to add semicolon to end the function when we write two IIFE function 

( () => {
    //simple IIFE bcz function do not have any name
    console.log(`DB CONNECTED TWO `);
} )()//will print DB CONNECTED TWO



( (name) => {
    //parameterized  IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') 