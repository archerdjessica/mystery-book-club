import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../review';
import { BookReviewService } from '../book-review.service'
import { Book } from '../book';

@Component({
  selector: 'app-user-read-review',
  templateUrl: './user-read-review.component.html',
  styleUrls: ['./user-read-review.component.css']
})
export class UserReadReviewComponent implements OnInit {

  @Input()
  book: Book;

  reviews: Review[];
  constructor(private reviewService: BookReviewService) { }

  ngOnInit() {
    this.reviewService.readReviews().subscribe(data => {
      this.reviews = data;
    })
  }
}
