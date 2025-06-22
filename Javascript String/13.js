//  Write a JavaScript function to concatenates a given string n times (default is 
// 1).  
// Test Data : 
// console.log(repeat('Ha!'));  
// console.log(repeat('Ha!',2));  
// console.log(repeat('Ha!',3)); 
// "Ha!"  
// "Ha!Ha!"  
// "Ha!Ha!Ha!" 

function repeat(str,num=3)
{
    let new_str = "";
    for(let i=0;i<num;i++)
    {
        new_str +=str;
    }
    return new_str;
}
console.log(repeat('Ha!'));  