function isBlank(value)
{
    return typeof value == "string" && value.length == 0
}



console.log(isBlank("a"))