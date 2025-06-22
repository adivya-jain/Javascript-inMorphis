function findPair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]; 
      }
    }
  }
  return null;
}

const numbers = [10, 20, 10, 40, 50, 60, 70];
const target = 50;

const result = findPair(numbers, target);
console.log("Indices of elements:", result); 