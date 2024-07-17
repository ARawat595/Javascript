// *******************for of loop*****************

// ["", "", ""]=>string in array
// [{}, {}, {}]=>object in array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) //here num is variable we declared like (i=0)in for loop //arr is object in which loop will be applied it can be anything (in for-of we dont need to increment and all it simply print values ) 
{
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) 
    { if (greet === ' '){ //if we dont want space after hello so we use continue
        continue
    }
    // console.log(`Each char is ${greet}`)
}

// ***************************Maps*****************
//Maps are similar to array having unique values and no duplicate values
//The Map is  object in javascript
//The  Map object holds key-value pairs and remembers the original insertion order of the keys


const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map); //it will simply print like object as yu can see below, here india will not repeat again bcz maps has unique values and there order will be same in which we have entered
/*Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }*/

    for (const key of map) { /*if we simply apply loop on map it will give output[ 'IN', 'India' ]
        [ 'USA', 'United States of America' ]
        [ 'Fr', 'France' ] n the structured array */
        // console.log(key);
    }


for (const [key, value] of map) {//if we want to values out of array from map we will write like [key, value] 
    // console.log(key, ':-', value); /*IN :- India USA :- United States of America Fr :- France */
}

for (const [key] of map) {//if we want only out of array from map we will write like [key] 
    // console.log(key);/*IN  USA  Fr */
}



//******* for of loop on object ***********************

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);//will give TypeError: myObject is not iterable so object is not iterable like maps
    
}