import { Component, OnInit } from '@angular/core';
import {GetBooksService} from '../getbooks.service';
import {Router} from '@angular/router';
import {Review} from '../review';
import { runInThisContext } from 'vm';
@Component({
  selector: 'app-user-read-review',
  templateUrl: './user-read-review.component.html',
  styleUrls: ['./user-read-review.component.css']
})
export class UserReadReviewComponent implements OnInit {
   review:Review[];
   bookId:number;
  constructor(private GetBooksService,  private router: Router) { }

  ngOnInit() {
  }
   public getReviews(){
     this.GetBooksService.getReviews(this.bookId).subscribe(data=>{this.review = data;})

   }

}
