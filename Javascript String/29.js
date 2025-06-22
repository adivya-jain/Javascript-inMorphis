function search_word(str, word) {
    const words = str.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let cleanedWord = words[i].replace(/[.,]/g, '');

        if (cleanedWord === word) {
            count++;
        }
    }

    return `'${word}' was found ${count} times.`;
}


console.log(search_word('The quick brown fox', 'fox'));  

console.log(search_word('aa, bb, cc, dd, aa', 'aa'));  

