import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersColection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numCollection = new NumbersColection([10, 3, -5, 0]);
const charCollection = new CharactersCollection('vshdauije');
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(20);
linkedList.add(4);
linkedList.add(-50);
linkedList.add(100);

const numSorter = new Sorter(numCollection);
const stringSorter = new Sorter(charCollection);
const linkedShorter = new Sorter(linkedList);
linkedShorter.sort();
numSorter.sort();
stringSorter.sort();
console.log('Number Sorting:', numSorter.collection);
console.log('Character Sorting:', stringSorter.collection);
linkedList.print();
