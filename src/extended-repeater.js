const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    str = String(str);
    let separator = "+";
    let additionSeparator = "|";
    let addition = "";
    let additionRepeatTimes = 1;
    let repeatTimes = 1;
    for (let key in options) {

        if (key === "separator") { separator = String(options[key]); }
        if (key === "additionSeparator") { additionSeparator = String(options[key]); }
        if (key === "repeatTimes") { repeatTimes = typeof options[key] === "number" ? options[key] : 0; }
        if (key === "addition") { addition = String(options[key]); }
        if (key === "additionRepeatTimes") { additionRepeatTimes = typeof options[key] === "number" ? options[key] : 0; }
    }

    let out = str + (((addition !== "" ? addition : "") === addition && additionRepeatTimes !== 0 ? (addition + additionSeparator).repeat(parseInt(additionRepeatTimes) - 1) + addition : ""));

    return (out + separator).repeat(repeatTimes - 1) + out;



}

module.exports = {
    repeater
};