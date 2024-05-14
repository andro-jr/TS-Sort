import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() >
      this.data[leftIndex + 1].toLowerCase()
    );
  }

  swap(leftIndex: number): void {
    const characters = this.data.split('');

    const temp = characters[leftIndex];
    characters[leftIndex] = characters[leftIndex + 1];
    characters[leftIndex + 1] = temp;

    this.data = characters.join('');
  }
}
