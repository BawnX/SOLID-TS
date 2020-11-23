import {Book} from './book';

export class Client {
  public Client() {
    const book: Book = new Book();
    book.printCurrentPage();
  }
}
