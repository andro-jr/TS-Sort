"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersColection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersColection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex) {
        return this.data[leftIndex] > this.data[leftIndex + 1];
    }
    swap(leftIndex) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[leftIndex + 1];
        this.data[leftIndex + 1] = temp;
    }
}
exports.NumbersColection = NumbersColection;
