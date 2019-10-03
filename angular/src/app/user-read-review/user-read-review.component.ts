import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Review } from '../review';
import { Book } from '../book';
import { Author } from '../author';
import { Publisher } from '../publisher';
import { BookReviewService } from '../book-review.service';

@Component({
  selector: 'app-user-read-review',
  templateUrl: './user-read-review.component.html',
  styleUrls: ['./user-read-review.component.css']
})
export class UserReadReviewComponent implements OnInit {

  user: User;
  book: Book;
  review: Review;
  author: Author;
  publisher: Publisher;
  reviews:Review[];
  constructor(private reviewService:BookReviewService) {
    this.user = new User();
    this.author = new Author();
    this.publisher = new Publisher();
    this.book = new Book();
    this.review = new Review();
  }

  ngOnInit() {
    this.reviewService.readReviews().subscribe(data=>{
      this.reviews = data;
    })
    this.author.authorId = 101;
    this.author.firstName = "John";
    this.author.lastName = "Smith";
    this.publisher.contact = 1234567890;
    this.publisher.pubId = 9001;
    this.publisher.pubName = "Sample Publisher";
    this.book.authors = [this.author];
    this.book.title = "Sample Title";
    this.book.isbn = 12345;
    this.book.publisher = this.publisher;
    this.user.id = 1001;
    this.user.email = "sybarra2076@gmail.com";
    // this.user.birthday = new Date('January 10, 1987');
    this.user.name = "Samuel Ybarra";
    this.user.password = "password";
    this.user.readingList = [this.book];
    this.review.book = this.book;
    this.review.dateWritten = new Date();
    this.review.reviewId = 4001;
    this.review.reviewBody = "This is a sample of the review body which can be manipulated by the Admin";
    this.review.user = this.user;
  }

}
