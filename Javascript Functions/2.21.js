function getCombinations(str,leng)
{
    const combinations = []
    function helper(current, index)
    {
        if(index === str.length)
        {
            if(current.length >= leng) combinations.push(current);
            return;
        }



        helper([...current,str[index]],index+1);
        helper(current,index+1)
    }
    helper([],0)
    return combinations;
}

const input = [1,2,3]
const subsets = getCombinations(input,2)
console.log(subsets)