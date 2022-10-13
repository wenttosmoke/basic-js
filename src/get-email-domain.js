const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    let emailPattern = /(@[\w]+.[\w]+.[\w]+)/g;
    return email.match(emailPattern)[0].slice(1);
}

module.exports = {
    getEmailDomain
};