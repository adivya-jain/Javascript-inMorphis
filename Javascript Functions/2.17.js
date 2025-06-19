function countLetterOccurrences(str) {
    const frequency = {};

    for (let char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') { // only letters
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    return frequency;
}