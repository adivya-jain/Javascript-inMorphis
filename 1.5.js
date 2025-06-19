let str = "w3resource"


setInterval(() => {
    let last = str.slice(-1)
    let rest = str.slice(0, -1)
    str = last + rest
    console.log(str) 
}, 1000)

