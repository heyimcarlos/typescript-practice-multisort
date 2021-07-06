import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numCollection = new NumbersCollection([1, 26, 25, -1, 5]);
numCollection.sort();
console.log(numCollection.data);

const linkList = new LinkedList();
linkList.add(1);
linkList.add(5);
linkList.add(-1);
linkList.sort();
linkList.print();

const charCollection = new CharactersCollection('XaAjDs');
charCollection.sort();
console.log(charCollection.data);
