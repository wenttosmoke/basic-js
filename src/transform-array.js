const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (Array.isArray(arr) !== true) { throw new Error("'arr' parameter must be an instance of the Array!"); }
    let discardPrev = '--discard-prev';
    let discardNext = '--discard-next';
    let doublePrev = '--double-prev';
    let doubleNext = '--double-next';
    let position = 0;
    let outputArray = [];
    let length = arr.length;
    let isFlag = false;
    while (position < arr.length) {
        (arr[position] === discardPrev) ? outputArray.splice(position - 1, 1): isFlag = true;
        (arr[position] === doublePrev) ? outputArray[position - 1] *= 2: isFlag = true;
        (arr[position] === doubleNext) ? outputArray[position + 1] *= 2: isFlag = true;
        (arr[position] === discardNext) ? position += 1: isFlag = true;
        if (isFlag === false) { outputArray[position] = arr[position]; } else { isFlag = false; }

    }
    return outputArray;

}
module.exports = {
    transform
};