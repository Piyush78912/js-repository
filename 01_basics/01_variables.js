const accountId = 144553;
let accountEmail = "khatripiyush547@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;
// accountId = 2; not allowed to change because it is constant

accountEmail = "hc@hc.com"
accountPassword = "231212"
accountCity = "Mumbai"

console.log(accountId);

/*
    Prefer not to use var 
    because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


