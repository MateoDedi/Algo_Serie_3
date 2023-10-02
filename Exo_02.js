function reverseOdd(str) {
    const words = str.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 === 1) {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    return words.join(' ');
}
    //sdsdd
console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));