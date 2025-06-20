function BinarySearch(arr,element,left,right)
{
    if(left > right) return 0;
    var mid = Math.floor((left + right)/2)
    if(arr[mid] === element)
    {
        return 1;
    }
    else if(arr[mid] < element) return BinarySearch(arr,element,mid+1,right);
    else return BinarySearch(arr,element,left,mid-1);

}
var arr = [1,2,3,4,5,7,8,9,14,18,21,34,46,56,68]
console.log(BinarySearch(arr,14,0,arr.length-1))