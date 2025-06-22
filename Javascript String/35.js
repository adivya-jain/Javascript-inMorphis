function strip_html_tags(str) {
    let result = '';
    let insideTag = false;

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];

        if (ch === '<') {
            insideTag = true;
        } else if (ch === '>') {
            insideTag = false;
        } else if (!insideTag) {
            result += ch;
        }
    }

    return result;
}

console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));

