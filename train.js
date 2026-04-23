function countLetter(char, word) {
    let count = 0;
    for (let c of word) {
        if (c === char) count++;
    }
    return count;
}

const result = countLetter('e', 'engineer');

console.log(result);

