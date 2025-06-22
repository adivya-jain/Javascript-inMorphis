console.log(protect_email("robin_singh@example.com")); 
// Write a JavaScript function to convert a string in abbreviated form. 

function protect_email(str)
{
    var arr = str.split("_")
    var [name,email] = str.split("@")
    var Fname = arr[0];
    if(arr.length > 1)
        {
            Fname += `...@${email}`
        } 

        return Fname;
}

// console.log(abbrev_name)