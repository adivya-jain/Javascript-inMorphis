function binarySearch(arr, target) {
    let start = 0;
    let high = arr.length - 1
    let mid ;
    while (high >= start) {
        mid = start + Math.floor((high - start) / 2);
        if (target == arr[mid]) {
            return `Target Found ${mid}`
        }
        if (target < mid) {
            high = mid -1
        }
        if (target > mid){
            start = mid +1
        }
    }
    return `Target Not found`
}

console.log(binarySearch([1,2,3,4,5], 3))