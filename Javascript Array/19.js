function sumArrays(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length);
    let result = [];

    for (let i = 0; i < maxLength; i++) {
        let val1 = arr1[i] || 0;
        let val2 = arr2[i] || 0;
        result.push(val1 + val2);
    }

    return result;
}

// Test case
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

console.log(sumArrays(array1, array2));

