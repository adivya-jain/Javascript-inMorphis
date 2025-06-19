function palindrom(str)
{
    str = str.toLowerCase();
    var left = 0;
    var right = str.length -1;
    while(left < right)
    {
        if(str[left]!=str[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let stre = "madam"
if(palindrom(stre))
{
    console.log(`${stre} is palindrome`)
}
else{
    console.log("Not palindrome")
}