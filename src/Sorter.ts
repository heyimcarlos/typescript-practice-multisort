// qualify as sortable if the below interface is true;
interface Sortable {
  length: number;
  compare(leftIdx: number, rightIdx: number): boolean;
  swap(leftIdx: number, rightIdx: number): void;
}

export abstract class Sorter {
  // collection is an instanceof NumbersCollection
  // constructor(public collection: Sortable) {}
  // Any child class that extends the functionality of Sorter will have to promise to provide logic for the abstract methods and properties below.
  abstract compare(leftIdx: number, rightIdx: number): boolean;
  abstract swap(leftIdx: number, rightIdx: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
