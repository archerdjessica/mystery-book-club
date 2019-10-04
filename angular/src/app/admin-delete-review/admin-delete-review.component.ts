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
  constructor(private reviewService: BookReviewService, private router: Router) {
    this.review = new Review();
  }

  deleteReview() {
    this.reviewService.deleteAnimal(this.review.reviewId).subscribe(data => {
    })
  }

  goToReviewList() {
    this.router.navigate(['/review']);
  }

}
