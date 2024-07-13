//*************Array*************** */

//******************Properties  of array***************
//JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript array-copy operations create shallow copies. 
 //A shallow copy of an object is a copy whose properties share the same references.(heap)
 //A deep copy of an object is a copy whose properties do not share the same references.(stack)

 //**********Declaration of array */
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);//prints 2

// Array methods

// myArr.push(6)//add 6 to the end of array
// myArr.push(7)// add 7 to the end of array
// myArr.pop()//delete from end of array

// myArr.unshift(9)//add the value 9 at the begining of array
// myArr.shift()// remove the array element from the end of array

// console.log(myArr);

// console.log(myArr.includes(9));//gives boolean result true/false
// console.log(myArr.indexOf(19));//gives -1 if value is greater than array
// console.log(myArr.indexOf(3));//gives the index of element  present in array


const newArr = myArr.join()//join operation change in string format

// console.log(myArr);//prints in the form of array [ 0, 1, 2, 3, 4 ]
// console.log(newArr);//value get converted in the form of string  0,1,2,3,4
// console.log(typeof newArr);//prints string

// slice operation  does not manipulate original array 
///splice operation manipulates original array

console.log("A ", myArr);//prints A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);//after slice prints [ 1, 2 ]
console.log("B ", myArr);//B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//removes splice portion from original array  (C  [ 0, 4, 5 ])
console.log(myn2);//prints splice portion from original array[ 1, 2, 3 ] 

