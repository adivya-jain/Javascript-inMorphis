function countVowel(str)
{
    var count = 0;
    str.split('').map((character)=>{
        if(character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' )
        {
            count++;
        }
    })
    return count;
}

console.log(countVowel('The quick brown fox'))