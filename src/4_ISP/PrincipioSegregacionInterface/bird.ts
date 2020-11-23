import {IFly, IRun} from './Animal';

export class Bird implements IFly, IRun {
  public run(): void {
    console.log('Bird is running');
  }
  public fly(): void {
    console.log('Bird is flying');
  }
}
