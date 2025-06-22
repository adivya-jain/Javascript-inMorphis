// Write a JavaScript function to remove specified number of characters from a string.
function truncate_string(str,num)
{
    var new_str = str.slice(0,num)
    return new_str

     
}


console.log(truncate_string("Robin Singh",4))