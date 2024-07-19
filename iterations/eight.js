//***********Reduce Method******** */
//it takes currentValue and accumulator
//currentValue => it points to values of array
//accumulator => It is a empty variable and is assigned with initial value only one time in the begining when initial value is passed after that its take the value which is returned

// const myNums = [1, 2, 3]
const initialValue = 0;//we can declare initialValue separately
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);// this is used to check currentValue and accumulator value every time when loop is running
//     return acc + currval
// }, initialValue)


const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);// this is used to check currentValue and accumulator value every time when loop is running
//     return acc + currval
// }, 0) //without using initialvalue variable you can simply pass value 


//*************reduce using arrow function*******************

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);