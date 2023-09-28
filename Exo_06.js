function brokenWords(str1, str2) {
    let newWord= [];

    for (let i = 0; i < str1.length; i++) {
        if ( str1[i] !== str2[i] && !newWord.includes(str1[i])) {
            newWord.push(str1[i]);
        }
    }
    return newWord;
}

console.log(brokenWords("happy birthday", "hawwy birthday"));
console.log(brokenWords("starry night", "starrq light"));
console.log(brokenWords("beethoven", "affthoif5"));