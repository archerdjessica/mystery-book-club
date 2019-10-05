import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Router } from '@angular/router';
import { Publisher } from '../publisher';
import { PublisherDataService } from '../publisher-data.service';
import { Author } from '../author';
import { AuthorDataService } from '../author-data.service';

@Component({
  selector: 'app-admin-add-book',
  templateUrl: './admin-add-book.component.html',
  styleUrls: ['./admin-add-book.component.css']
})
export class AdminAddBookComponent implements OnInit {

  selectedPublisher: Publisher;
  num: string;
  book: Book;
  publishers: Publisher[];
  authors: Author[];
  author1: Author;
  author2: Author;
  author3: Author;
  constructor(private bookService: BookDataService,
    private publisherService: PublisherDataService,
    private authorService: AuthorDataService,
    private router: Router) {
    this.book = new Book();
    this.authors = new Array();
    this.author1 = new Author();
    this.author2 = new Author();
    this.author3 = new Author();
    this.num = "";
  }

  ngOnInit() {
    this.publisherService.getPublisherList().subscribe(pubData => { this.publishers = pubData });
    console.log("Is this still working? " + this.publishers);
  }
  i: number;
  public addBook() {
    this.i = 0;
    this.authorService.addAuthor(this.author1).subscribe(data => { this.author1 = data });
    this.authors.push(this.author1);
    console.log(this.author1.authorId);
    if (this.author2.firstName != null) {
      this.i++;
      this.authorService.addAuthor(this.author2).subscribe(data => { this.author2 = data });
      this.authors[this.i] = this.author2;
    }
    if (this.author3.firstName != null) {
      this.i++;
      this.authorService.addAuthor(this.author3).subscribe(data => { this.author3 = data });
      this.authors[this.i] = this.author3;
    }
    console.log(this.authors);
    this.book.publisher = this.selectedPublisher;
    this.book.authors = this.authors;
    this.bookService.addBook(this.book).subscribe(data => {
      this.displayBooks();
    })
  }

  public displayBooks() {
    this.router.navigate(['/browseBooks'])
  }

  public authorFunction() {
    switch (this.num) {
      case "1":
        document.getElementById("author_2").hidden = true;
        document.getElementById("author_3").hidden = true;
        break;
      case "2":
        document.getElementById("author_2").hidden = false;
        document.getElementById("author_3").hidden = true;
        break;
      case "3":
        document.getElementById("author_2").hidden = false;
        document.getElementById("author_3").hidden = false;
        break;
      default:
        document.getElementById("author_2").hidden = true;
        document.getElementById("author_3").hidden = true;
        break;
    }
  }
}
