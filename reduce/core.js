function sum(array) {
    // your code here
    return array.reduce((a, b) => a + b);
}

function productAll(array) {
    // your code here
    return array.reduce(
        (prev, curr, index, arr) => {
            if (index === arr.length - 2) {
                arr.splice(1);
            }
            return prev * curr.reduce((a, b) => a * b);
        },
        array[0].reduce((a, b) => a * b)
    );
}

function objectify(array) {
    // your code here
    return array.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
}

function luckyNumbers(array) {
    // your code here
    return array.reduce((string, number, index, arr) => {
        if (index < arr.length - 1) {
            return `${string} ${number},`;
        } else {
            return `${string} and ${number}`;
        }
    }, "Your lucky numbers are:");
}

console.log(luckyNumbers([30, 48, 11, 5, 32]));

module.exports = {
    sum: sum,
    productAll: productAll,
    objectify: objectify,
    luckyNumbers: luckyNumbers,
};
