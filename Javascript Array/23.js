function flattenArray(arr) {
  return arr.flat(Infinity); // flatten to any depth
}

function difference(arr1, arr2) {
  let flat1 = flattenArray(arr1);
  let flat2 = flattenArray(arr2);

  let diff1 = flat1.filter(item => !flat2.includes(item));
  let diff2 = flat2.filter(item => !flat1.includes(item));

  return [...new Set([...diff1, ...diff2])];
}