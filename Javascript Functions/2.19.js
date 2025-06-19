const num = 19;
const arr = [13, 54, 12, 54, 84, 98, 16, 40, 37];

function GreaterNumber(num) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(GreaterNumber(num)); 
