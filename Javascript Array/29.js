    function num_string_range(start, end, step = 1) {
    const result = [];
    
    if (typeof start === 'string' && typeof end === 'string' && start.length === 1 && end.length === 1) {
        let startCode = start.charCodeAt(0);
        let endCode = end.charCodeAt(0);

        for (let i = startCode; i <= endCode; i += step) {
            result.push(String.fromCharCode(i));
        }
    }
    

    else if (typeof start === 'number' && typeof end === 'number') {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    
    return result;
}

// Test Data
console.log(num_string_range('a', 'z', 2));  // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
console.log(num_string_range(1, 10, 3));     // [1, 4, 7, 10]
