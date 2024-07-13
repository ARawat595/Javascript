const score = 400
// console.log(score);//prints number 400

const balance = new Number(100)
// console.log(balance);//prints Number{100}

// console.log(balance.toString());//converted to string
// console.log(balance.toString().length);//prints 3 as converted to string and 100 has 3 character
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));//prints 124 gives precesion upto 3 digits
// console.log(otherNumber.toPrecision(4));//prints 123.9 gives precesion upto 4 digits.

const hundreds = 1000000
// console.log(hundreds.toLocaleString());//prints 1,000,000 as per Us Standards 
// console.log(hundreds.toLocaleString('en-IN'));// prints 10,00,000 as per indian Standards

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//prints positive 4
// console.log(Math.round(4.6));//prints 5 
// console.log(Math.ceil(4.2));//prints 5(if value greater it will take highest value)
// console.log(Math.floor(4.9));//prints 4(in any case it will take lowest value)
// console.log(Math.min(4, 3, 6, 8));//prints 3 minimum value
// console.log(Math.max(4, 3, 6, 8));//prints 8 maximum value

// console.log(Math.random());//prints (0.6823544984769145) random value b/w  0 & 1 every time 
console.log((Math.random()*10 + 1));//we multiply with 10 the value get shifted to left (prints value from range 1-10) **(suppose if value comes is 0.041 in that case)** we add 1 to it so, that min value which get printed will be 1 not zero
// console.log(Math.floor(Math.random()*10) + 1);//adding floor to it will print single value excluding decimal vaue range from (1-10)

const min = 10
const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1))) //will print value range (0-10)

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//will print value range (10-19)