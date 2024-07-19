const accountId=12345
let accountEmail="ankush@gmail.com"
var accounPassword="12345678"
accountCity="jaipur"

//accountId=2 //not Allowed as it is declared constant

accountEmail="@agmail.com"
accountPassword="86745"

let accounState; //this will give undefined as
console.log(accountId);

console.table([accountId,accountEmail,accounPassword,accountCity])

/* 
{
This is scope
}

prefer not to use var 
because of issue in block scope and global scope value get overridden

*/