function firstNonRepeating(str)
{
    count = {}
    for(var ch of str)
    {
        count[ch] = (count[ch] || 0) + 1;
    }

    for(let char of str)
    {
        if(count[char] === 1) return char;
    }
}

console.log(firstNonRepeating('abacddbec'))