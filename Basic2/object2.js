//**********Object created two ways give same output which is {} */

// const tinderUser = new Object() //creating using constructor will give Singleton object
// const tinderUser = {}  //created using literals non singleton object  
// console.log(tinderUser);//prints {} for both 

const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {          //here fullname is object in itself like regularUser is object
        userfullname: {  //here userfullname is also object in itself like regularUser & fullname object
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);//values are accessed using (.)
// console.log(regularUser.fullname.userfullname["firstname"])//prints the same

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }//prints like array data inside data { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)//prints { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }// where {}=> is target and rest all objects  are source

// const obj3 = {...obj1,...obj2,...obj4}//spread method prints { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } // we will be using 90% time this syntax only
// console.log(obj3);

//whenever we get values from database we get array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email

console.log(tinderUser);

//methods we will require

// console.log(Object.keys(tinderUser));// will give [ 'id', 'name', 'isLoggedIn' ] datatype is array we can use and apply loop to access keys 
// console.log(Object.values(tinderUser));// will give [ '123abc', 'Sammy', false ] datatype is array we can use and apply loop to access values 

// console.log(Object.entries(tinderUser));//will give [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] //will give array inside array every key:value pair is converted to array


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//this method gives value in boolean asking if object has that property this is used when looping and not get the value so, to prevent from getting crash


//***************Destructuring of objects */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
 //to avoid repeating course.courseInstructor if we want to print value multiple times

 //Destructure of object below given syntax is (const {} = objectname)
const {courseInstructor} = course//to extract values from object name 
// console.log(courseInstructor);//prints hitesh

//suppose we think courseInstructor big name we cant make it short to instructor nothinh will change it will give same result 
const {courseInstructor: instructor} = course
console.log(instructor);//prints hitesh


//below is treated like JSON (javascript object notation )where key and values both are strings

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//sometime we get API in the form arrays not only objects

[
    {},
    {},
    {}
]