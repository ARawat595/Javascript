const name = "ankush"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('ankush-hc-com')
const gameName = new String('The morning is upon us.')

console.log(gameName[0]);
console.log(gameName.__proto__);//prints {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//prints e
console.log(gameName.indexOf('u'));// prints 15

const newString = gameName.substring(0, 5)
console.log(newString);// prints The m

const anotherString = gameName.slice(-8,4);//
console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))// will give https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))//will give false

//console.log(gameName.split('-'));// will split in arrays based on - [ 'ankush', 'hc', 'com' ]
console.log(gameName.split(' '));// prints based on space [ 'The', 'morning', 'is', 'upon', 'us.' ]