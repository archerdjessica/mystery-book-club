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

  // user: User;
  // book: Book;
  // review: Review;
  // author: Author;
  // publisher: Publisher;
  reviews:Review[];
  constructor(private reviewService:BookReviewService) {
    // this.user = new User();
    // this.author = new Author();
    // this.publisher = new Publisher();
    // this.book = new Book();
    // this.review = new Review();
  }

  ngOnInit() {
    this.reviewService.readReviews().subscribe(data=>{
      this.reviews = data;
    })
  }

}
