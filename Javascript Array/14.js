function removeDuplicatesIgnoreCase(arr) {
  const seen = new Set();
  const result = [];

  for (let item of arr) {
    let lower = item.toLowerCase(); 

    if (!seen.has(lower)) {
      seen.add(lower);     
      result.push(item);   
    }
  }

  return result;
}

const input = ["Apple", "Banana", "apple", "Orange", "banana", "ORANGE"];
console.log(removeDuplicatesIgnoreCase(input));