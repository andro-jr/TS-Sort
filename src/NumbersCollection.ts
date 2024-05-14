import { Sorter } from './Sorter';

export class NumbersColection extends Sorter {
  constructor(public data: number[]) {
    super();
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    return this.data[leftIndex] > this.data[leftIndex + 1];
  }

  swap(leftIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[leftIndex + 1];
    this.data[leftIndex + 1] = temp;
  }
}
