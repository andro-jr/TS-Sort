import { NumbersColection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numCollection = new NumbersColection([10, 3, -5, 0]);

const sorter = new Sorter(numCollection);
console.log('Before Sorting:', sorter.collection);
sorter.sort();
console.log('After Sorting:', sorter.collection);
