// Write a JavaScript function to truncate a string to a certain number of words.  
// Test Data : 
console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); 
// Output :  
// "The quick brown fox"

function truncate(str,num)
{
    var arr = str.split(" ")
    var result = "";
    for(let i=0;i<num;i++)
    {
        result+=arr[i] + " "
    }
    return result
}