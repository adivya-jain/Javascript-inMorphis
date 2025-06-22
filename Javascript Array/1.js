function isArray(arr)
{
    // return Object.prototype.toString.call(arr) == '[object Array]'
    return Array.isArray(arr)
}

console.log(isArray([]))