const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    var today = new Date();
    try {
        date - (new Date())
    } catch (e) {
        throw new Error('Invalid date!');
    }

    if (!date) { return 'Unable to determine the time of year!'; }
    if (Object.prototype.toString.call(date) !== '[object Date]') { throw new Error('Invalid date!'); }

    let currentMonth = parseInt(date.getMonth());

    if (currentMonth === 11 || currentMonth <= 1) { return 'winter'; } else if (currentMonth <= 4) { return 'spring'; } else if (currentMonth <= 7) { return 'summer'; } else { return 'autumn'; }
}

module.exports = {
    getSeason
};