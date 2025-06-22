for(let i = 100;i<= 999;i++)
{
    if(armstrong(i))
    {
        console.log(`${i} is Armstrong`)
    }
}
function armstrong(num)
{
    let sum = num;
    while(num!=0)
    {
        let digit = num % 10;
        let cube = Math.pow(digit,3);
        sum -=cube;
        num = Math.floor(num / 10);
    }

    if(sum == 0) return 1;
    return 0;
}
