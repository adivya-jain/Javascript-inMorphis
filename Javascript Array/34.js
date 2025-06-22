function nthLargest(arr, n) {
  let sorted = arr.slice().sort((a, b) => b - a);
  return sorted[n - 1];
}

console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); 