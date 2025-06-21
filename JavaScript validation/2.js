//  Write a JavaScript function to validate whether a given value type is error or 
// not.  

function isError(value) {
    return value instanceof Error;
}

console.log(isError(new Error("This is an error")))