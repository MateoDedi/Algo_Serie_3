function convert(str) {
    let num = parseFloat(str.match(/\d+/));

    if (str.includes('C')) {
        num = Math.round((num * 9/5) + 32);
        return num + '°F';
    } else if (str.includes('F')) {
        num = Math.round((num - 32) * 5/9);
        return num + '°C';
    } else {
        return "Error";
    }
}

console.log(convert("20°C"));
console.log(convert("19°F"));
console.log(convert("F"));