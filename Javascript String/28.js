function ascii_to_hexa(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16);
    }
    return hex;
}

// Test cases
console.log(ascii_to_hexa('12'));    
console.log(ascii_to_hexa('100'));  