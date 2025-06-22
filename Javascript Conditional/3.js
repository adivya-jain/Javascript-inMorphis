let num1 = 0;
let num2 = -1;
let num3 = 4;

if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        alert(num1 + ", " + num2 + ", " + num3); 
    } else {
        alert(num1 + ", " + num3 + ", " + num2);
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        alert(num2 + ", " + num1 + ", " + num3); 
    } else {
        alert(num2 + ", " + num3 + ", " + num1); 
    }
} else {
    if (num1 >= num2) {
        alert(num3 + ", " + num1 + ", " + num2); 
    } else {
        alert(num3 + ", " + num2 + ", " + num1); 
    }
}
