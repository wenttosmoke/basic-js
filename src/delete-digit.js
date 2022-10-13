const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(digit) {
    let maxDigit = 0;
    let digitString = new String(digit);
    for (let i = 0; i < digitString.length; i++) {
        maxDigit = Math.max(maxDigit, parseInt(digitString.replace(digitString[i], "")));
    }
    return maxDigit;
}

module.exports = {
    deleteDigit
};