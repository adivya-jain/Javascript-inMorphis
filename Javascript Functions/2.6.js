let str = 'Web Development Tutorial'

var maxi = 0
var MaxWord = ""
str.split(' ').map((word)=>{
if(maxi < word.length)
{
    MaxWord = word;
    maxi = word.length;
}
})
console.log(MaxWord)

