//**********Switch syntax*********** */

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march" //we can use number and string to match with all the cases

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;//if we dont apply break the value where it get matched all the code after that line will get executed except default
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}