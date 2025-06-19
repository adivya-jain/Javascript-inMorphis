function getCombinations(str)
{
    const combinations = []
    function helper(current, index)
    {
        if(index === str.length)
        {
            combinations.push(current);
            return;
        }



        helper(current+str[index],index+1);
        helper(current,index+1)
    }
    helper('',0)
    return combinations;
}

const input = "dog"
const subsets = getCombinations(input)
console.log(subsets)