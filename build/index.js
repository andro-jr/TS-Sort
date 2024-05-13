"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const numCollection = new NumbersCollection_1.NumbersColection([10, 3, -5, 0]);
const sorter = new Sorter_1.Sorter(numCollection);
console.log('Before Sorting:', sorter.collection);
sorter.sort();
console.log('After Sorting:', sorter.collection);
