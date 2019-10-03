<<<<<<< HEAD
import { User } from './user';
import {Book} from "./book";
export class Review {
    reviewId:number;
	 book:Book;
	 review:string;
	 dateWritten:Date;
	 user:User;
     
}
=======
import { Book } from './book';
import { User } from './user';

export class Review {
    reviewId: number;
    book: Book;
    reviewBody: string;
    dateWritten: Date;
    user: User;
}
>>>>>>> 1341f6b55a72020bf75ebf1833e05992f931bb34
