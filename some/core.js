// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10(input) {
    return input.some((ele) => ele > 10);
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord(input) {
    return input.some((ele) => ele.length > 10);
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities(input) {
    return input.some((arr) => {
        return arr.some((ele) => ele === true);
    });
}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa(input) {
    return input.some((word) => word.includes("Lost"));
}

module.exports = {
    anyGreaterThan10,
    longWord,
    truePossibilities,
    lostCarcosa,
};
