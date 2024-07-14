// console.log(2 >1);
// console.log(2 >=1);
// console.log(2 <1);
// console.log(2==1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

// The reason is that an equality check == and comparisons ><>=<= work differently
//comparisons convert null to number, treating it as 0
//That's why (3)  null>=0 is true and null > 0 is false

//=== this strictly checks datatype as well as below is string and number so output is false

console.log("2" === 2);//false
