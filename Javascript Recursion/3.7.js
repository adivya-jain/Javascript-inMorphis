function evenOrNot(n) {
    if (n == 0) return "Even";
    if (n == 1) return "Odd";
    return evenOrNot(n - 2);
}

console.log(evenOrNot(18)); 
console.log(evenOrNot(27)); 
