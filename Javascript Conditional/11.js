function GCD(a,b)
{
    while(a!=0 && b!=0)
    {
        a>b? a = a%b:b = b%a
    }
    return a==0?b:a;
}


console.log(GCD(6,0))