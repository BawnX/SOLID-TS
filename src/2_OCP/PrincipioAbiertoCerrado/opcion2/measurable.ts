export abstract class Measurable {
  abstract getSentLength(): number
  abstract getTotalLength(): number

  public getSentLengthPercentage(): number{
    return this.getSentLength() * 100 / this.getTotalLength()
  }
}