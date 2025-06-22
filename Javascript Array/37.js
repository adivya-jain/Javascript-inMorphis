function array_filled(size, value) {
  let result = [];
  for (let i = 0; i < size; i++) {
    result.push(value);
  }
  return result;
}

console.log(array_filled(3, 'default value')); 