const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let outputNames = [];
    let position = 0;
    let pattern = /\((\d+)\)+/g;
    let pattern2 = /\((\d+)\)+\((\d+)\)/g;
    let getNumber = /\((\d+){1}\)/g;
    while (position < names.length) {
        let currentName = names[position];
        console.log(currentName);
        let find = outputNames.find(element => element === currentName);
        if (find !== undefined) {
            console.log(1)
            currentName = currentName + '(1)';
            console.log(currentName)
            find = outputNames.find(element => element === currentName);
            if (find !== undefined) {
                let digits = currentName.match(getNumber);
                digits = digits[0].replace("(", "").replace(")", "")
                while (outputNames.find(element => element === currentName) !== undefined) {
                    currentName = currentName.replace(`${digits}`, parseInt(digits) + 1);
                    console.log(currentName);
                }
            }
        }
        outputNames[position] = currentName;
        position += 1;
    }
    return outputNames;
}


module.exports = {
    renameFiles
};