function sentenceCase(str) {
    const words = str.split(' ');
    let result = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            result += word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        if (i !== words.length - 1) {
            result += ' ';
        }
    }

    return result;
}

console.log(sentenceCase('PHP exercises. python exercises.'));

