import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { BookReviewService } from '../book-review.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { User } from '../user';

@Component({
  selector: 'app-user-write-review',
  templateUrl: './user-write-review.component.html',
  styleUrls: ['./user-write-review.component.css']
})
export class UserWriteReviewComponent implements OnInit {

  review: Review;
  user: User;
  book: Book;
  constructor(private reviewService: BookReviewService, private router: Router) {
    this.review = new Review();
    this.book = new Book();
    this.user = new User();
    this.book.bookId = 3;
    this.user.id = 5;
    this.user.name = "Sam Ybarra";
    this.review.reviewBody = "Enter your Review here...";
  }

  ngOnInit() {
    document.getElementsByName("review")[0].innerText = this.review.reviewBody;
  }

  saveReview() {
    this.review.dateWritten = new Date();
    this.review.book = this.book;
    this.review.user = this.user;
    console.log(this.review.reviewBody);
    console.log(this.review.book.bookId);
    this.reviewService.saveReview(this.review).subscribe(data => this.goToReviewList());
    
  }

  goToReviewList() {
    this.router.navigate(['/browseBooks']);
  }
}
