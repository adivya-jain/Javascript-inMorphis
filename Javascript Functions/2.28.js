function add(...obj)
{
    return obj.reduce((acc,curr)=>acc+=curr,0)
}
function addTwo(add)
{
    var sum = add(2,3)
    console.log("Sum is ", sum);
}
function addThree(add)
{
    var sum = add(2,5,7)
    console.log("Sum of 3 numbers is", sum);
}

addThree(add)
addTwo(add)
