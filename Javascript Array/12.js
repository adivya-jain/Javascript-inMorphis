function sumAndProduct(arr) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }

  console.log("Sum:", sum);
  console.log("Product:", product);
}
sumAndProduct([1, 2, 3, 4]);