function onlyEven(array) {
    return array.filter((num) => num % 2 === 0);
}

function onlyOneWord(array) {
    // your code here
    return array.filter((word) => !word.includes(" "));
}

function positiveRowsOnly(array) {
    // your code here
    return array.filter((arr, i, matrix) => {
        return arr.every((ele) => ele >= 0);
    });
}

function allSameVowels(array) {
    // your code here
    return array.filter((word) => {
        return word.match(/[aeiou]/gi).every((vowel, i, arr) => vowel === arr[0]);
    });
}

module.exports = {
    onlyEven: onlyEven,
    onlyOneWord: onlyOneWord,
    positiveRowsOnly: positiveRowsOnly,
    allSameVowels: allSameVowels,
};
