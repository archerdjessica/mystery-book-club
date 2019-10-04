import { Component } from '@angular/core';
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
export class UserWriteReviewComponent {

  review: Review;
  constructor(private reviewService: BookReviewService, private router: Router) {
    this.review = new Review();
    this.review.reviewBody = "Enter your Review here...";
  }

  saveReview(user: User, book: Book) {
    this.review.dateWritten = new Date();
    this.review.book = book;
    this.review.user = user;
    console.log(this.review.reviewBody);
    this.goToReviewList();
    //this.reviewService.saveReview(this.review).subscribe(data => this.review);
  }

  goToReviewList() {
    this.router.navigate(['/review']);
  }
}
