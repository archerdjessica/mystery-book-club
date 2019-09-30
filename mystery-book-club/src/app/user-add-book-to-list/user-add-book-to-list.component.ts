import { Component, OnInit } from '@angular/core';
import { Publisher } from '../publisher';
import { Book } from '../book';
import {Author} from '../author';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-user-add-book-to-list',
  templateUrl: './user-add-book-to-list.component.html',
  styleUrls: ['./user-add-book-to-list.component.css']
})
export class UserAddBookToListComponent implements OnInit {
  publisher:Publisher;
  book:Book;
  //authors:Author[];
  constructor() {
    this.book = new Book();
    this.publisher = new Publisher();
    this.book.publisher=this.publisher;
    this.book.authors=[{"authorID":1,"firstName":"","lastName":""},{"authorID":2,"firstName":"","lastName":""},{"authorID":3,"firstName":"","lastName":""}];
   }

  ngOnInit() {
  }

}
