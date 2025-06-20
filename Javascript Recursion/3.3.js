arr = []
function range(a,b)
{
    arr.push(a);
    if(a == b) { 
        return};

    range(a+1,b);
}
range(10,100)
console.log(arr)