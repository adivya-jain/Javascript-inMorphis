function zeroFill(number, width, sign) {
    let numStr = Math.abs(number).toString();


    while (numStr.length < width) {
        numStr = '0' + numStr;
    }

    if (sign === '-') {
        numStr = '+' + numStr;
    }

    return numStr;
}


console.log(zeroFill(120, 5, '-')); 
console.log(zeroFill(29, 4));        