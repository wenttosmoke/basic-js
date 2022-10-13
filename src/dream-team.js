const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (Array.isArray(members) === false) { return false; }
    let array = [];
    let dreamTeam = '';
    members.forEach(element => {
        if (typeof element === "string") {
            for (let j = 0; j <= element.length; j += 1) {
                if (element[j] >= 'A' && element[j] <= 'Z' || element[j] >= 'a' && element[j] <= 'z') {
                    array.push(element[j].toUpperCase());
                    break;
                }
            }

        }
    })
    if (array === []) { return false; }
    array.sort().forEach(element => dreamTeam += element);
    return dreamTeam;
}

module.exports = {
    createDreamTeam
};