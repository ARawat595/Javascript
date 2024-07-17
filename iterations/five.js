//********forEach Loop */ 
//It is higher order function
//ForEach loop takes (callback function)so here difference is callback function donot have any name 
//syntax is forEach(function (){})

//*********************Foreach loop using normal function applied on array

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ here this (callback) function is running inside array (coding) so it will bring values of array as a parameter, and we can name it  anything like items, val, num whatever we want 
//     console.log(val);
// } )

//*********************Foreach loop using  Arrow (=>) function applied on array

// coding.forEach( (item) => { //like function we can also use (arrow function0 which it will work the same 
//     console.log(item);
// } )

//*********************Foreach loop using function reference
//here we have created function separately not a call back function which performm some task and we have simplly passed its reference inside forEach

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

//***********forEach not only bring one parameter it has access to more parameter like index, arrayList which is declared below is example********* */

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
/*above code will print array_items, its index values and the arraylist
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]*/


//**Object inside Array we use forEach to access */

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); //here we have used forEach to access values of objects inside array
} )