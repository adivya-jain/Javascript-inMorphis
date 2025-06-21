function isCheck(value)
{
    return typeof(value) === "number" && !isNaN(value)
}

console.log(isCheck("23"))