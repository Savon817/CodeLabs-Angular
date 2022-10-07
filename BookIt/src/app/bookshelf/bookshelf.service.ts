import { EventEmitter } from "@angular/core";
import { Book } from "../shared/book/book.model";


export class BookshelfService{

  private myBook: Book[] = [
    new Book('Book Title', 'Some Author', '', 'Fantasy'),
    ];


    bookListChanged = new EventEmitter<Book[]>();

    getBooks(){
      return this.myBook.slice();
    }

    addBooks
}
