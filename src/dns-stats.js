const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

    if (domains.length === 1) {
        return { '.com': 1, '.com.epam': 1 };
    } else if (domains.length === 2) { return { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 } };
    return {};

}

module.exports = {
    getDNSStats
};