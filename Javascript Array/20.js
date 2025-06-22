function findDuplicates(arr) {
    let seen = {};
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (seen[value]) {
            if (!duplicates.includes(value)) {
                duplicates.push(value);
            }
        } else {
            seen[value] = true;
        }
    }

    return duplicates;
}

let sampleArray = [1, 2, 3, 4, 2, 3, 5, 6, 1];
console.log("Duplicates:", findDuplicates(sampleArray));