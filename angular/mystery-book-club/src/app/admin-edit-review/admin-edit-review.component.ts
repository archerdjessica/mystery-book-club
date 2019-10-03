import { Component } from '@angular/core';
import { Review } from '../review';
import { BookReviewService } from '../book-review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-review',
  templateUrl: './admin-edit-review.component.html',
  styleUrls: ['./admin-edit-review.component.css']
})
export class AdminEditReviewComponent {

  review: Review;
  constructor(private reviewService: BookReviewService, private router: Router) {
    this.review = new Review();
  }

  updateReview() {
    console.log(this.review.reviewBody);
    //this.reviewService.editReview(this.review).subscribe(data => this.goToReviewList())
  }

  goToReviewList() {
    this.router.navigate(['/review']);
  }
}
