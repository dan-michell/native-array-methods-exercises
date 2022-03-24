// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
    return input.every((ele) => ele % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
    return input.every((ele, i) => typeof ele === typeof input[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
    return input.every((arr) => {
        return Array.isArray(arr) === true && arr.every((ele) => ele > 0);
    });
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
    return input.every((str) => {
        return typeof str === "string" && str.match(/[aeiou]/gi).every((vowel, i, arr) => vowel === arr[0]);
    });
}

module.exports = {
    allEven,
    allSameType,
    positiveMatrix,
    allSameVowels,
};
