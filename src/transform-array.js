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
    console.log(arr);
    let discardPrev = '--discard-prev';
    let discardNext = '--discard-next';
    let doublePrev = '--double-prev';
    let doubleNext = '--double-next';
    let position = 0;
    let outputPosition = 0;
    let outputArray = [];
    let multiple = 1;
    let arr2 = Array.from(arr);
    let isFlag = false;
    while (position < arr2.length) {
        if (typeof arr2[position] !== "number" && typeof arr2[position] !== "string" && arr2[position] !== discardNext &&
            arr2[position] !== discardPrev && arr2[position] !== doubleNext && arr2[position] !== doublePrev && arr2[position] !== "control-set" &&
            arr2[position] !== "removed") { return arr; }
        if (arr2[position] === discardPrev) {

            if (position !== 0 && arr2[position - 1] !== "control-set") {
                arr2[position - 1] = "removed";
                arr2[position] = "control-set";


            } else { if (position === 0 || (position !== 0 && (arr2[position - 1] === "control-set" || arr2[position - 1] === "removed"))) { arr2[position] = "control-set"; } }
        } else {
            if (arr2[position] === doublePrev) {

                if (position !== 0 && typeof arr2[position - 1] === "number") {
                    arr2[position] = arr2[position - 1];

                } else { if (position === 0 || (position !== 0 && (arr2[position - 1] === "control-set" || arr2[position - 1] === "removed"))) { arr2[position] = "control-set"; } }
            } else {
                if (arr2[position] === doubleNext) {

                    if (position + 1 < arr2.length && typeof arr2[position + 1] === "number") {
                        arr2[position] = arr2[position + 1];

                    } else { if (position + 1 >= arr2.length || position + 1 < arr2.length && arr2[position + 1] !== "control-set") { arr2[position] = "control-set"; } }
                } else {
                    if (arr2[position] === discardNext) {

                        if (position + 1 < arr2.length && typeof arr2[position + 1] === "number") {
                            arr2[position + 1] = "control-set";


                        } else { if (position + 1 >= arr2.length || position + 1 < arr2.length && arr2[position + 1] !== "control-set") { arr2[position] = "control-set"; } }
                        arr2[position] = "control-set";

                    }
                }
            }

        }
        position += 1;

    }

    console.log(arr)
    arr2.forEach(element => element !== "control-set" && element !== "removed" ? outputArray.push(element) : "");
    return outputArray;


}
module.exports = {
    transform
};