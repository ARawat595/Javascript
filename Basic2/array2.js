const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//****push add to existing array *****
// console.log(marvel_heros);//['thor','Ironman','spiderman',['superman','flash','batman']] array takes another array as single data (data can be either boolean or any value)
// console.log(marvel_heros[3][1]);///prints flash

// const allHeros = marvel_heros.concat(dc_heros)//
// console.log(allHeros);//concat returns new array[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//***By using spread operator */
// const all_new_heros = [...marvel_heros, ...dc_heros]//this is prefered 
// console.log(all_new_heros);//by using this we can add as many as elements seperated by ...[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)// converts the array inside array in a single array 
console.log(real_another_array);/* prints [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5 ] */

    
console.log(Array.isArray("Hitesh"))//prints boolean value false/true
console.log(Array.from("Hitesh"))// convert into array [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // prints empty array [] interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//converts values in the form of array


