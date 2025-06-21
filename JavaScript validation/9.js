function isChar(value) {
    return typeof value === 'string' && value.length === 1;
}
console.log(isChar("ab"))