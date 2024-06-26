"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex) {
        return (this.data[leftIndex].toLowerCase() >
            this.data[leftIndex + 1].toLowerCase());
    }
    swap(leftIndex) {
        const characters = this.data.split('');
        const temp = characters[leftIndex];
        characters[leftIndex] = characters[leftIndex + 1];
        characters[leftIndex + 1] = temp;
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
