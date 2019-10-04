 
import { User } from './user';
import {Book} from "./book";


     


export class Review {
    reviewId: number;
    book: Book;
    reviewBody: string;
    dateWritten: Date;
    user: User;
}
