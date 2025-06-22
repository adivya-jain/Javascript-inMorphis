function join_array_element_in_string(arr){
    let res = ''

    for(let i in arr){
        let stringDigit = arr[i].toString()
        res +=stringDigit
    }
    console.log(typeof res)
    return res
}

console.log(join_array_element_in_string([1,2,3,4]))