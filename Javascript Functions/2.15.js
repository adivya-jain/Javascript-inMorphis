function computePower() {
    const base = parseFloat(prompt("Enter the base (b):"));
    const exponent = parseInt(prompt("Enter the exponent (n):"));

    if (isNaN(base) || isNaN(exponent)) {
        alert("Please enter valid numbers.");
        return;
    }

    const result = Math.pow(base, exponent);

    console.log(`${base} raised to the power of ${exponent} is ${result}`);
    alert(`${base} raised to the power of ${exponent} is ${result}`);
}

computePower();
