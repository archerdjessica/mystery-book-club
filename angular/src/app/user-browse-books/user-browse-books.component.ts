import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Review } from '../review';
import { BookReviewService } from '../book-review.service';

@Component({
  selector: 'app-user-browse-books',
  templateUrl: './user-browse-books.component.html',
  styleUrls: ['./user-browse-books.component.css']
})
export class UserBrowseBooksComponent implements OnInit {

  books: Book[];
  reviews: Review[];
  constructor(private bookService: BookDataService, private reviewService: BookReviewService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(bookData => { this.books = bookData });
    this.reviewService.readReviews().subscribe(reviewData => { this.reviews = reviewData });
  }

}
