function unio_of_array(arr1,arr2){
    let res = [...arr1,...arr2]
    let unique = [new Set(res)]
    return unique;
}

console.log(unio_of_array([1,2,4],[3,5,6]))