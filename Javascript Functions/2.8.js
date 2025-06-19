function checkPrime(num)
{
    for(let i=2;i<num/2;i++)
    {
        if(num%i == 0)
        {
            return 0;
        }
    }
    return 1;
}

console.log(checkPrime(10)?"Prime":"Not Prime")