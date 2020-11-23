import {Book} from './book';
import {StandardConsole} from './standarConsole';

export class Client {
  public Client() {
    const book: Book = new Book();
    const printer: StandardConsole = new StandardConsole();

    const currentPage = book.currentPage();
    printer.printPage(currentPage);
  }
}
