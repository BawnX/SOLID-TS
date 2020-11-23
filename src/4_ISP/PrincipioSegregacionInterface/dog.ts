import {IBark, IRun} from './Animal';

export class Dog implements IBark, IRun {
  public run(): void {
    console.log('Dog is running');
  }

  public bark(): void {
    console.log('Dog is barking');
  }
}
