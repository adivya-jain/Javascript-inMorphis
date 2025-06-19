var arr = [1,2,3,4,6]

function secondLagestAndSmallest(arr)
{
    if(arr.length < 2)
    {
        console.log("sahi se input de")
    }
    console.log(arr[1],arr[arr.length -2])
}


secondLagestAndSmallest(arr)