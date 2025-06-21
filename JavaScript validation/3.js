function isNaNValue(value) {
    return typeof value === 'number' && isNaN(value);
}


console.log(isNaNValue(NaN))