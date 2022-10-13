const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

    if (!sampleActivity || typeof sampleActivity !== 'string' || isNaN(sampleActivity) || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0) { return false; }
    sampleActivity = parseFloat(sampleActivity);
    if (sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) { return false; }

    let speedConst = 0.693 / HALF_LIFE_PERIOD;


    let currentAge = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / speedConst);
    return currentAge;
}

module.exports = {
    dateSample
};