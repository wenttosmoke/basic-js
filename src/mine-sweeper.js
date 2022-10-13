const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    for (let i = 0; i < matrix.length; i += 1) {

        for (let j = 0; j < matrix[i].length; j += 1) {
            if (matrix[i][j] === false) {


                matrix[i][j] = HowManyMines(matrix, i, j);

            }


        }

    }
    matrix.forEach(element => {
        for (let i = 0; i < element.length; i += 1) { element[i] === true ? element[i] = 1 : ""; }
    })


    return matrix;
}

function HowManyMines(arr, row, collumn) {
    let borderTop = 0;
    let borderLeft = 0;
    let borderRight = arr[0].length - 1;
    let borderBottom = arr.length - 1;
    let count = 0;
    if (row + 1 <= borderBottom && collumn + 1 <= borderRight) {
        (arr[row + 1][collumn + 1] === true) ? count += 1: "";
    }
    if (row + 1 <= borderBottom && collumn - 1 >= borderLeft) {
        (arr[row + 1][collumn - 1] === true) ? count += 1: "";
    }
    if (row - 1 >= borderTop && collumn - 1 >= borderLeft) {
        (arr[row - 1][collumn - 1] === true) ? count += 1: "";
    }
    if (row - 1 >= borderTop && collumn + 1 <= borderRight) {
        arr[row - 1][collumn + 1] === true ? count += 1 : "";
    }
    if (row + 1 <= borderBottom) {
        arr[row + 1][collumn] === true ? count += 1 : ""
    }
    if (collumn - 1 >= borderLeft) {
        arr[row][collumn - 1] === true ? count += 1 : ""
    }
    if (row - 1 >= borderTop) {
        arr[row - 1][collumn] === true ? count += 1 : ""
    }
    if (collumn + 1 <= borderRight) {
        arr[row][collumn + 1] === true ? count += 1 : ""
    }
    return count;



}

module.exports = {
    minesweeper
};