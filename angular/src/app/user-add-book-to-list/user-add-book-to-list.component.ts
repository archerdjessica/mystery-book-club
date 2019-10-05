import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';

@Component({
  selector: 'app-user-add-book-to-list',
  templateUrl: './user-add-book-to-list.component.html',
  styleUrls: ['./user-add-book-to-list.component.css']
})
export class UserAddBookToListComponent {

  book:Book;
  constructor(private bookService:BookDataService) { 
    this.book = new Book();
  }

  // public getBooks(){
  //   return this
  // }

}
