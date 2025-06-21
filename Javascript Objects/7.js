

function getSubsets(str)
{
    var results = []
    let index = 0;
    for(let i = 0 ; i <str.length; i++)
    {
        for(let j = i+1;j<=str.length;j++)
        {
            results[index++] = str.slice(i,j)
        }
    }
    return results

}

var str = "adivya"
console.log(getSubsets(str))