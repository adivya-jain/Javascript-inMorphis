function countLetter(str, letter) {
    return [...str]
    .filter(char => char === letter).length;
}

console.log(countLetter('w3resource.com','o'))