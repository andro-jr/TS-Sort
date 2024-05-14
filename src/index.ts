import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersColection } from './NumbersCollection';

const numCollection = new NumbersColection([10, 3, -5, 0]);
const charCollection = new CharactersCollection('vshdauije');
const linkedList = new LinkedList();

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
