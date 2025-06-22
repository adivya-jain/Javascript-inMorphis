function array_range(start, length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(start + i);
  }
  return result;
}

console.log(array_range(1, 4));    // [1, 2, 3, 4]
console.log(array_range(-6, 4));   // [-6, -5, -4, -3]