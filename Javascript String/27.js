//  Write a JavaScript function to convert ASCII to Hexadecimal format.  
// Test Data : 
// console.log(ascii_to_hexa('12'));  
// console.log(ascii_to_hexa('100')); 
// Output :  
// "3132"  
// "313030"

function ascii_to_hexa(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16);
    }
    return hex;
}


console.log(ascii_to_hexa('12'));   
console.log(ascii_to_hexa('100'));   
