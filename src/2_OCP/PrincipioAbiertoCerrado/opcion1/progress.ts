import {Measurable} from './measurable';

export class Progress {
  public getSentLengthPercentage(measurable: Measurable): number {
    return (measurable.getSentLength() * 100) / measurable.getTotalLength();
  }
}
