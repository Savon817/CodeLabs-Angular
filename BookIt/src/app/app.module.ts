import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookComponent } from './shared/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    LibraryComponent,
    BookResultsComponent,
    BookSearchComponent,
    HeaderComponent,
    BookListComponent,
    BookDetailsComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
