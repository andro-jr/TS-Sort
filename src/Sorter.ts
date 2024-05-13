export interface Sortable {
  compare(leftIndex: number): boolean;
  swap(leftIndex: number): void;
  length: number;
}

export class Sorter {
  constructor(public collection: Sortable) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j)) {
          this.collection.swap(j);
        }
      }
    }
  }
}
