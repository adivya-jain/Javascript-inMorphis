function getRandomItem(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Example usage:
console.log(getRandomItem([10, 20, 30, 40, 50]));