const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr, count = 1, maxDeep = 1) {
        maxDeep = Math.max(maxDeep, count);
        for (let i = 0; i < arr.length; i += 1) {
            if (typeof arr[i] == 'object') {
                maxDeep = Math.max(maxDeep, count);
                maxDeep = this.calculateDepth(arr[i], count + 1, maxDeep);
            }
        }

        return maxDeep;
    }
}


module.exports = {
    DepthCalculator
};