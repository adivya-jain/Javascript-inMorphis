function move(arr, oldIndex, newIndex) {
    const length = arr.length;

    if (oldIndex < 0) oldIndex = length + oldIndex;
    if (newIndex < 0) newIndex = length + newIndex;

    if (oldIndex >= length || oldIndex < 0 || newIndex >= length || newIndex < 0) {
        console.log("Invalid indices");
        return arr;
    }

    if (oldIndex < newIndex) {
        let temp = arr[oldIndex];
        for (let i = oldIndex; i < newIndex; i++) {
            arr[i] = arr[i + 1];
        }
        arr[newIndex] = temp;
    } else if (oldIndex > newIndex) {
        let temp = arr[oldIndex];
        for (let i = oldIndex; i > newIndex; i--) {
            arr[i] = arr[i - 1];
        }
        arr[newIndex] = temp;
    }

    return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));  