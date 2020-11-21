export class File{
  private totalLength: number = 0;
  private sentLength: number = 0;

  public getSentLenghtPercentage(): number{
    return this.sentLength * 100 / this.totalLength
  }
}