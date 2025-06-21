var student = {  
name : "David Rayy",  
sclass : "VI",  
rollno : 12 }; 

// delete student.rollno

let {rollno, ...rest } = student

console.log(rest)