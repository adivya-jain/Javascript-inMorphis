var num = 6

let factor = []
for(let i=1;i <= num/2;i++)
{
    
    if(num%i == 0)
    {
       factor.push(i)
    }
}

console.log(factor)
