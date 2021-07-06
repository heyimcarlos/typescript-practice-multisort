import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  swap(leftIdx: number, rightIdx: number): void {
    const strArr = this.data.split('');

    const left = strArr[leftIdx];
    strArr[leftIdx] = strArr[rightIdx];
    strArr[rightIdx] = left;

    this.data = strArr.join('');
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  get length(): number {
    return this.data.length;
  }
}
