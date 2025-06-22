function uncamelize(str, separator = ' ') {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (i > 0 && char >= 'A' && char <= 'Z') {
            result += separator + char.toLowerCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}

console.log(uncamelize('helloWorld'));      
console.log(uncamelize('helloWorld', '-')); 
console.log(uncamelize('helloWorld', '_'));  
