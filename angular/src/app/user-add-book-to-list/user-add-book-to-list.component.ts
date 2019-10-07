import { Component, OnInit, Input } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add-book-to-list',
  templateUrl: './user-add-book-to-list.component.html',
  styleUrls: ['./user-add-book-to-list.component.css']
})
export class UserAddBookToListComponent {

  @Input()
  user: User;

  books: Book[];
  book: number;
  constructor(private bookService: BookDataService, private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(data => { this.books = data });
  }

  public addToUserList(book: number) {
    this.books.forEach(element => {
      if (element.bookId == book)
        this.user.readingList.push(element);
    });
    this.userService.updateUser(this.user).subscribe(data=>{this.user = data});
  }
}
