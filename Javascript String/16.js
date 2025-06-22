function text_truncate(str, maxLength = str.length, ending = '…') {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength - ending.length) +" "+ ending;
    }
}


console.log(text_truncate('We are doing JS string exercises.'));  

console.log(text_truncate('We are doing JS string exercises.', 19));  

console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));  

