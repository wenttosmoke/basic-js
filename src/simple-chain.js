const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {

    chain: "",
    arr: [],
    chainArr: [],
    chainsDigit: 0,

    getLength() {
        return (chainArr.length);
    },
    addLink(value = '') {

        if (value === null) { value = "null"; }
        this.chainArr.push(`~~( ${value} )`);
        this.chainsDigit += 1;
        return this;

    },
    removeLink(position) {
        if (typeof position !== "number" || !position || position === NaN || Number(position) === position && Number(position) % 1 !== 0 || (parseInt(position) <= 0 || parseInt(position) > this.chainsDigit)) {
            this.chain = "";
            this.arr = [];
            this.chainArr = [];
            this.chainsDigit = 0;
            throw Error("You can't remove incorrect link!");
        };
        this.arr = [...this.chainArr];
        this.arr[position - 1] = "toRemove";
        this.chainArr = [];
        this.arr.forEach(element => element !== "toRemove" ? this.chainArr.push(element) : "");
        this.chainsDigit -= 1;
        return this;


    },
    reverseChain() {

        this.chainArr.reverse()
        return this;

    },
    finishChain() {
        let output = [...this.chainArr].join("").slice(2);
        this.chain = "";
        this.arr = [];
        this.chainArr = [];
        this.chainsDigit = 0;
        return output;

    }
};
module.exports = {
    chainMaker
};