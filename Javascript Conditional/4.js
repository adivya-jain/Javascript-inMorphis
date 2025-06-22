let arr = [1,6,2,8,11]
let max = Number.MIN_VALUE
for(let i=0;i<arr.length;i++)
{
    if(max < arr[i])
    {
        max = arr[i];
    }
}
console.log("Maximum of all is",max)