"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
const numCollection = new NumbersCollection_1.NumbersColection([10, 3, -5, 0]);
const charCollection = new CharactersCollection_1.CharactersCollection('vshdauije');
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(20);
linkedList.add(4);
linkedList.add(-50);
linkedList.add(100);
numCollection.sort();
charCollection.sort();
linkedList.sort();
console.log(numCollection.data);
console.log(charCollection.data);
linkedList.print();
