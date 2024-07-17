//******* for of loop on object ***********************

// //const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     // console.log(key, ':-', value);//will give TypeError: myObject is not iterable so object is not iterable like maps using (for of loop)
    
// }

//************Example how Object is iterable **********
//Object is iterable using (for In loop)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//**************(For in) loop in Array */
//by default array have keys which is called index that starts with 0


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);//it will simply print index starting from 0 to arraya length
    console.log(programming[key]);//by doing this you can access array values 
}


//**************(For in) loop in maps  */

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);/* for in loop cannot be applied on maps it will give error not iterable*/
// }



//****Note:***********The difference b/w (for of) and (for in) loop is that (for of) gives values where as (for in) give keys********