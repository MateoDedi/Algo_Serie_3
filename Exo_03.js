function isSmooth(str) {
    const words = str.split(/\s+/);
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i][words[i].length - 1].toLowerCase() == words[i + 1][0].toLowerCase()) {
            // words[i][words[i].length - 1] to access the last letter of the current word.
            // words[i + 1][0] to access the first letter of the next word.
            return true;
        } else {
            return false;
        }
    }
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
console.log(isSmooth("Someone is outside the doorway"));
console.log(isSmooth("She eats super righteously"));