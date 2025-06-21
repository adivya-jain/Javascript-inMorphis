function mergeSort(arr)
{
    if(arr.length <= 1)
    {
        return arr;
    }

    var mid = Math.floor((arr.length)/2)
    left_half = arr.slice(0,mid)
    right_half = arr.slice(mid)


    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

const sampleArray = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(sampleArray);
console.log(sortedArray); 