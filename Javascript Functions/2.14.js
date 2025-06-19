let num = 149;
const arr = [25, 10, 5, 2, 1];
let i = 0;
let denominations = [];

while (num !== 0) {
    let count = Math.floor(num / arr[i]);
    for (let j = 0; j < count; j++) {
        denominations.push(arr[i]);
    }
    num = num % arr[i];
    i++;
}

console.log(denominations);
