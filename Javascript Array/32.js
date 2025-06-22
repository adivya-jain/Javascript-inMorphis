function remove_array_element(arr, element) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      result.pop(arr[i]);
    }
  }
  return result;
}

console.log(remove_array_element([2, 5, 9, 6], 5)); 