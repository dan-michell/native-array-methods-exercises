function multiplyBy10(array) {
    // your code here
    return array.map((num) => num * 10);
}

function shiftRight(array) {
    // your code here
    return array.map((ele, index, arr) => {
        return arr[(index + 2) % arr.length];
    });
}

function onlyVowels(array) {
    // your code here
    return array.map((word) => {
        return word.replace(/[b-df-hj-np-tv-z]+/g, "");
    });
}

function doubleMatrix(array) {
    // your code here
    return array.map((row) => {
        return row.map((ele) => {
            return ele * 2;
        });
    });
}

module.exports = {
    multiplyBy10: multiplyBy10,
    shiftRight: shiftRight,
    onlyVowels: onlyVowels,
    doubleMatrix: doubleMatrix,
};
