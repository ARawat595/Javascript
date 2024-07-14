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
console.log(stringNumber);//pritns 33
console.log(typeof stringNumber);//string

//******************Opeartions********************

let value =3
let negValue= -value
console.log(negValue);// prints -3


console.log("1" + 2);//output will be 12
console.log(1 + "2");//output will be 12
console.log("1" + 2 + 2);// output 122 first is String so  everything will be converted to string
console.log(1 + 2 + "1");//output 32 first is Number so  everything will be converted to number


console.log(+true);//prints 1 for true
console.log("");

