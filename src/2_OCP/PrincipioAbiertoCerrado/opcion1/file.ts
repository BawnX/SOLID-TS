import {Measurable} from './measurable';

export class File implements Measurable {
  private totalLength: number = 0;
  private sentLength: number = 0;

  public getTotalLength(): number {
    return this.totalLength;
  }

  public getSentLength(): number {
    return this.sentLength;
  }
}
