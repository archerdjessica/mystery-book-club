import { Publisher} from './publisher';
import {Author} from './author';

export class Book {
    isbn:number;
	publisher:Publisher;
	authors:Author[];
	title:string;
	//{"authorID":1,"firstName":"","lastName":""},{"authorID":2,"firstName":"","lastName":""},{"authorID":3,"firstName":"","lastName":""}
}