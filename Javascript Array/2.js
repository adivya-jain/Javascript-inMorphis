function cloneArray(arr) {
    var new_arr = arr.slice(); 
    console.log('Original Array:', arr);
    console.log('Cloned Array:', new_arr);
    
    console.log('Are they the same array (reference)?', arr === new_arr);
}

var arr = [1, 2, 4, 0];
cloneArray(arr);
