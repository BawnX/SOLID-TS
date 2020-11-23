import {Rectangle} from './rectangle';

export class Square extends Rectangle {
  constructor(lengthAndWidth: number) {
    super(lengthAndWidth, lengthAndWidth);
  }

  public setLength(length: number): void {
    super.setLength(length);
    super.setWidth(length);
  }

  public setWidth(width: number): void {
    super.setLength(width);
    super.setWidth(width);
  }
}
