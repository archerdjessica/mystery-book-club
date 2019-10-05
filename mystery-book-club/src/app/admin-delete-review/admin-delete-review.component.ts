import { Component } from '@angular/core';
import { BookReviewService } from '../book-review.service';
import { Router } from '@angular/router';
import { Review } from '../review';

@Component({
  selector: 'app-admin-delete-review',
  templateUrl: './admin-delete-review.component.html',
  styleUrls: ['./admin-delete-review.component.css']
})
export class AdminDeleteReviewComponent {

  review: Review;
  constructor(private router: Router) {//private reviewService: BookReviewService, private router: Router) {
    this.review = new Review();
    this.review.reviewBody = "Test";
    this.review.reviewId = 10;
  }

  deleteReview() {
    //this.reviewService.deleteAnimal(this.review.reviewId).subscribe(data => {
    console.log(this.review.reviewId);
    console.log("review deleted");
    //})
  }

  goToReviewList() {
    this.router.navigate(['/review']);
  }
}
