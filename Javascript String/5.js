// Write a JavaScript function to convert a string in abbreviated form. 
console.log(abbrev_name("Parn Jain"));

function abbrev_name(str)
{
    var arr = str.split(" ")
    var Fname = arr[0];
    if(arr.length > 1)
        {
            var Sname = arr[1][0]
            Fname += ` ${Sname}.`
        } 

        return Fname;
}

// console.log(abbrev_name)


// function abbrev_name(str) {
//     let [firstName, lastName] = str.split(" ");
//     return lastName ? `${firstName} ${lastName[0]}.` : firstName;  
// }
// console.log(abbrev_name("Parn Jain")); 
// console.log(abbrev_name("Parn"));  
