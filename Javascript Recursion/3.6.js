function fibonacciSequence(n) {
    const result = [];

    function fib(i) {
        if (i === 0) return 0;
        if (i === 1) return 1;
        return fib(i - 1) + fib(i - 2);
    }

    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }

    return result;
}

console.log(fibonacciSequence(10));
