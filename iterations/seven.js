

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})//same as filter doing map is also taling call back function and returning

//*************Chaining****************** */
//whenever chaining is applied first chain result is paased on to second chain
const newNums = myNumers
                .map((num) => num * 10 )//
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)//will print //[41, 51,  61, 71,
                                                         // 81, 91, 101]

console.log(newNums);