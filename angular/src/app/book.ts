import { Publisher } from './publisher';
import { Author } from './author';

export class Book {
	bookId:number;
    isbn:number;
	publisher:Publisher;
	authors:Author[];
	title:string;
}