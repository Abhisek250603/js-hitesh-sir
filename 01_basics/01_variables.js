const accountId = 144553
let accountEmail = "praharaj@gmail.com"
var accountPassword = "000000" // Prefer not to use var for issue in block & functional scope
accountCity = "Kolkata"

// accountId = 2 // Not allowed
accountEmail = "abc@gmail.com"
accountPassword = "014796"
accountCity = "Contai"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])