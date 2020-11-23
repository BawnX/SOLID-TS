export class Rectangle {
  private length: number;
  private width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  setLength(length: number): void {
    this.length = length;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getArea(): number {
    return this.length * this.width;
  }
}
