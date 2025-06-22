function insertDash(numberStr) {
    let result = numberStr[0];

    for (let i = 1; i < numberStr.length; i++) {
        const prev = parseInt(numberStr[i - 1]);
        const current = parseInt(numberStr[i]);

        if (prev % 2 === 0 && current % 2 === 0) {
            result += '-' + numberStr[i];
        } else {
            result += numberStr[i];
        }
    }

    return result;
}


console.log(insertDash("025468"));  
