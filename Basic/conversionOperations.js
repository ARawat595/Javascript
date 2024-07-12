let score="33abc";

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)//convert string in number
console.log(typeof valueInNumber);//for "33abc" it will still give number
console.log(valueInNumber);//NaN(not a number)

//"33" => 33
//"33abc" => NaN
//true => 1; false =>0;
 
let isLoggedIn = "Ankush rawat"

let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);

// 1 =>true ; 0 => false
//"" =>false
//"ankush rawat" => true


let someNumber = 33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
