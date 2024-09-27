import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-app'
  books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ];
  showBookList = false;

  addBook(newBook: { title: string; author: string }) {
    this.books.push(newBook);
  }

  toggleBookList() {
    this.showBookList = !this.showBookList;
  }
}
