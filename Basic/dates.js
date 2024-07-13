//********************** Dates*********************

let myDate = new Date()
// console.log(myDate);// prints in this format 2024-07-13T11:24:49.088Z
// console.log(myDate.toString());//prints Sat Jul 13 2024 11:24:49 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //prints Sat Jul 13 2024
// console.log(myDate.toLocaleString());// prints 7/13/2024, 11:26:37 AM
// console.log(typeof myDate);//************** */ date type is object***************
// console.log(myDate.toISOString());// prints 2024-07-13T11:29:10.815Z
// console.log(myDate.toJSON());// prints 2024-07-13T11:32:19.356Z
// console.log(myDate.toLocaleDateString());//prints 7/13/2024

// let myCreatedDate = new Date(2023, 0, 23)// one way to declare date 
// console.log(myCreatedDate.toDateString());//prints (Mon Jan 23 2023)if declared above then month starts with 0

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)//another way to declare date 
// console.log(myCreatedDate.toLocaleString());//prints 1/23/2023, 5:03:00 AM (date along with time)

// let myCreatedDate = new Date("2023-01-14")//another way to declare date 
// console.log(myCreatedDate.toLocaleString());//prints 1/14/2023, 12:00:00 AM

// let myCreatedDate = new Date("07-13-2024")//another way to declare date ******we follow this****
// console.log(myCreatedDate.toLocaleString());//prints 7-13-2024, 12:00:00 AM

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")***when we use (dd-mm-yy)month start with 1***
let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);//prints values in miliseconds(1720871716608)
// console.log(myCreatedDate.getTime());//prints value in miliseconds from the date (1673654400000)


 //*********Asked in Interview to convert in seconds**********
// console.log((Date.now()/1000));// prints value in seconds but with decimal value 1720872049.904
// console.log(Math.floor(Date.now()/1000)); //prints value in seconds(1720872096)

let newDate = new Date(2023, 0, 23)
// console.log(newDate);//prints 2024-07-13T12:03:47.527Z
// console.log(newDate.getMonth()); //prints  number of month(6)
// console.log(newDate.getMonth() + 1);//prints  number of month plus one(7)
// console.log(newDate.getDay());//prints  number of day(6)

// console.log(`${newDate.getDay()} and the time `)// prints 6 and the time 

newDate.toLocaleString('default', {
    weekday:"long"//for print weekday complete(like Monday not mon)
    
})
