function remove_non_ascii(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >= 32 && code <= 126) {
            result += str[i];
        }
    }
    return result;
}

console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));

