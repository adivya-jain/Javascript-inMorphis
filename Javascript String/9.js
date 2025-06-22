//capitalize first letter of each word
function capitalize_Words(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(' ');
}

console.log(capitalize_Words('js string exercises')); 

