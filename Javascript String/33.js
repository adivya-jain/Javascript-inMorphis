function remove_non_word(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
         if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9') ||
            ch === ' ' || ch === '-'
        ) {
            result += ch;
        }
    }
    return result;
}


console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

