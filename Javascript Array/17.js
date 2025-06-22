function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (arr.length - i)) + i;

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const myArray = [1, 2, 3, 4, 5];
console.log(shuffleArray(myArray));