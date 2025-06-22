function camelCase(str)
{
    var new_Str = ""
    var arr = str.split(" ")
    for(let i=0;i<arr.length;i++)
    {
        new_Str += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    return new_Str;
}


console.log(camelCase("JavaScript Exercises"));   // "JavaScriptExercises"
console.log(camelCase("JavaScript exercises"));   // "JavaScriptExercises"
console.log(camelCase("JavaScriptExercises"));    // "JavaScriptExercises"