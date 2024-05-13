import { CharactersCollection } from './CharactersCollection';
import { NumbersColection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numCollection = new NumbersColection([10, 3, -5, 0]);
const charCollection = new CharactersCollection('vshdauije');

const numSorter = new Sorter(numCollection);
const stringSorter = new Sorter(charCollection);
numSorter.sort();
stringSorter.sort();
console.log('Number Sorting:', numSorter.collection);
console.log('Character Sorting:', stringSorter.collection);
