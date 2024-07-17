//********forEach loop does not return anyvalue whether you have used return keyword or not it will simply give undefined */


// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);


//********IF we want some value should be returned we use (filter) */

//filter also take callback function inside it where every value will be accesed followed by condition ,values which satify the condition will be returned those who donot satisfy the condition will not be returned

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)////this is also arrow function using implicit return
//     console.log(newNums); //will return [ 5, 6, 7, 8, 9, 10 ]
 

//   const newNums = myNums.filter( (num) => {
//     num > 4
// } )
// console.log(newNums);//this will print empty array [] to solve this see below example


//Note: in above if curly-braces { } are used we must have to write return keyword  
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums); //now it will return [ 5, 6, 7, 8, 9, 10 ]

//*************If we dont want to use filter and want to be done using forEach */

// const newNums = []  //declare empty array to store return values 

// myNums.forEach( (num) => {  //same logic forEach followed by callback function and if conditon 
//     if (num > 4) {
//         newNums.push(num) //to add values used array push method
//     }
// } )
// console.log(newNums);

//***********Another example of filter */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')//arrow using implicit return

//   userBooks = books.filter( (bk) => { //arrow using curly braces and writing return keyword 
//     return bk.publish >= 1995 && bk.genre === "History" // we can use logical AND two check two condition at a time and return value
   
// })
userBooks = books.filter( (bk) => {
    return bk.genre === "Maths" || bk.edition == 2010
})
  console.log(userBooks);