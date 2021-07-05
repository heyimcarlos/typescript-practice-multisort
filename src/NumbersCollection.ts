export class NumbersCollection {
  constructor(public data: number[]) {}

  swap(leftIdx: number, rightIdx: number): void {
    const left = this.data[leftIdx];
    this.data[leftIdx] = this.data[rightIdx];
    this.data[rightIdx] = left;
  }
  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx];
  }

  // getter, we don't need to call it. Just reference it directly.
  get length(): number {
    return this.data.length;
  }
}
