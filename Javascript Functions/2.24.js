function bubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[j] < arr[j+1])
            {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;

}
// console.log(bubbleSort(arr))

var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
console.log(bubbleSort(arr))
