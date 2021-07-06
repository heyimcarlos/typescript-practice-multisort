import { Sorter } from './Sorter';

export class Node {
  public next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  public head: Node | null = null;

  add(num: number): void {
    const node: Node = new Node(num);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  swap(leftIdx: number, rightIdx: number): void {
    const leftNode = this.at(leftIdx);
    const rightNode = this.at(rightIdx);

    const leftValue = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftValue;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;

    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    if (!this.head) throw new Error('List is empty');
    return this.at(leftIdx).value > this.at(rightIdx).value;
  }

  at(index: number): Node {
    // receive an idx and return the node at that idx;
    if (!this.head) throw new Error('Index out of bound');

    // let idx = 0;

    // let node = this.head;
    // while (node.next && index !== idx) {
    //   idx++;
    //   node = node.next;
    // }

    // return node;

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }
}
