import { Publisher } from './publisher';
import { Author } from './author';

export class Book {
    isbn: number;
    title: string;
    publisher: Publisher;
    authors: Author[];
  	//{"authorID":1,"firstName":"","lastName":""},{"authorID":2,"firstName":"","lastName":""},{"authorID":3,"firstName":"","lastName":""}

}