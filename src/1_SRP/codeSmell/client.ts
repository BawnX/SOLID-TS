import { Book } from "./book";

class Client {
  public Client(){
    const book: Book = new Book()
    book.printCurrentPage()
  }
}