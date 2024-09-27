import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  title = '';
  author = '';

  @Output() bookCreated = new EventEmitter<{ title: string; author: string }>();

  createBook() {
    const newBook = { title: this.title, author: this.author };
    this.bookCreated.emit(newBook);
    this.title = '';
    this.author = '';
  }
}
