function isRegExp(value) {
    return value instanceof RegExp;
}

console.log(isRegExp(/abc/))