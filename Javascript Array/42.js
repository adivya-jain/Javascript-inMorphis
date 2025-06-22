function difference(arr1, arr2) {
    arr1 = arr1.flat();
    arr2 = arr2.flat();

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const diff1 = arr1.filter(item => !set2.has(item));
    const diff2 = arr2.filter(item => !set1.has(item));
    
    const result = [...new Set([...diff1, ...diff2])];
    
    return result;
}


console.log(difference([1, 2, 3], [100, 2, 1, 10]));  

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5,6]]));  

console.log(difference([1, 2, 3], [100, 2, 1, 10]));  

