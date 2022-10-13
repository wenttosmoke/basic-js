const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let outputString = '';
    let currentPosition = 0;
    let pred = '';
    let commonSymbols = 1;
    while (currentPosition < str.length) {
        if (str[currentPosition] === pred) { commonSymbols += 1; } else {
            if (commonSymbols !== 1) { outputString = outputString + commonSymbols + pred; } else { outputString += pred; }
            pred = str[currentPosition];
            commonSymbols = 1;
        }
        currentPosition += 1;

    }
    if (commonSymbols !== 1) { outputString = outputString + commonSymbols + pred; } else { outputString += pred; }
    return outputString;
}

module.exports = {
    encodeLine
};