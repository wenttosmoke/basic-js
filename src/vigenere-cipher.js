const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(flag = true) {
        this.flag = flag;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    }
    encrypt(message, key) {
        if (!message || !key) { throw new Error("Incorrect arguments!"); }
        let outputString = '';
        let keylength = key.length;
        let keyLetter = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0; i < message.length; i += 1) {
            if (this.alphabet.indexOf(message[i]) !== -1) {
                outputString += this.alphabet[(this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyLetter])) % 26];
                keyLetter = (keyLetter + 1) % keylength;
            } else { outputString += message[i]; }
        }
        return this.flag === true ? outputString : outputString.split('').reverse().join('');
    }
    decrypt(message, key) {
        if (!message || !key) { throw new Error("Incorrect arguments!"); }
        let outputString = '';
        let keylength = key.length;
        let keyLetter = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0; i < message.length; i += 1) {
            if (this.alphabet.indexOf(message[i]) !== -1) {

                outputString += this.alphabet[(this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[keyLetter]) + 26) % 26];
                keyLetter = (keyLetter + 1) % keylength;
            } else { outputString += message[i]; }
        }
        return this.flag === true ? outputString : outputString.split('').reverse().join('');
    }
}


module.exports = {
    VigenereCipheringMachine
};