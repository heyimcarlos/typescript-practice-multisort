import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// const numbersCollectionInstance = new NumbersCollection([4, -1, -56, 123, 22, 51]);
// console.log(numbersCollectionInstance.data);

const charactersCollectionInstance = new CharactersCollection('Xaaa');

const toSort = new Sorter(charactersCollectionInstance);
toSort.sort();
console.log(toSort.collection);
