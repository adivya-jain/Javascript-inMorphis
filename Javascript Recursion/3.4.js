function sumF(arr,index,sum)
{
    if(index === arr.length)
    {
        return sum;
    }
    return sumF(arr,index+1,sum + arr[index])

}

console.log(sumF([1,2,4,5,6,7],0,0))