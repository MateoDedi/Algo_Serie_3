function oddOrEven(num) {
    let sum = 0;

    const numStr = num.toString();

    for(let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }

    if (sum % 2 == 0) {
        return "Oddish";
    } else if (sum % 2 == 1) {
        return "Evenish";
    } else {
        return "ERROR"
    }

}

console.log(oddOrEven(43));
console.log(oddOrEven(373));
console.log(oddOrEven(4433));
console.log(oddOrEven("brrrrr"));