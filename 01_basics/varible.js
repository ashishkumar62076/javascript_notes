const accountId= 53434
let accountEmail= "ashish@gmail.com"
var accountPassword = "1234"
accountCity = "Hazaribag"



 //accountId = 2  not allowed


accountEmail = "as@gmail.com"
accountPassword = "123456"
accountCity = "Bengaluru"


console.log(accountId);


/*

Prefer  ot to use var
beacuse of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity])