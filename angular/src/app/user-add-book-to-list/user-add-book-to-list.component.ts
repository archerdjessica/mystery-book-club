import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';

@Component({
  selector: 'app-user-add-book-to-list',
  templateUrl: './user-add-book-to-list.component.html',
  styleUrls: ['./user-add-book-to-list.component.css']
})
export class UserAddBookToListComponent {

  books:Book[];
  constructor(private bookService:BookDataService) { 
  }

  ngOnInit(){
    this.bookService.getAllBooks().subscribe(data=>{this.books = data});
  }

}
