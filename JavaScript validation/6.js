// . Write a JavaScript function to validate whether a given value is object or not.  
function check(obj)
{
    console.log(Object.prototype.toString.call(obj)) 
    return obj !== null &&
    typeof obj == "object" &&
    !Array.isArray(obj)
}


console.log(check(null))