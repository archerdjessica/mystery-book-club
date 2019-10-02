import { Component, OnInit } from '@angular/core';
import {GetBooksService} from '../getbooks.service';
import {Router} from '@angular/router';
import {Book} from '../book';
@Component({
  selector: 'app-user-browse-books',
  templateUrl: './user-browse-books.component.html',
  styleUrls: ['./user-browse-books.component.css']
})
export class UserBrowseBooksComponent implements OnInit {
   books:Book[];
  constructor(private getbookservice:GetBooksService, private router: Router) {
       
   }

  ngOnInit() {
      this.getbookservice.getAllBooks().subscribe(data=>{this.books=data;})
  }

}
