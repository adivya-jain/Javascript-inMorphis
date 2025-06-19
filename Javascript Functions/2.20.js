
function generateRandomId(length){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let result = ""

for(let i=0;i<length;i++)
{
    var randomNumber = Math.floor(Math.random() * characters.length);
    result +=characters[randomNumber]

}
return result
}

console.log(generateRandomId(25))