function formatted_string(pad, str, padType) {
    str = str.toString();       
    const padLength = pad.length;
    if (padType === 'l') {
        return pad.slice(0, padLength - str.length) + str;
    } else {
        return str + pad.slice(str.length);
    }
}

// Test cases
console.log(formatted_string('0000', 123, 'l'));  // "0123"
console.log(formatted_string('00000000', 123, '')); // "12300000"
