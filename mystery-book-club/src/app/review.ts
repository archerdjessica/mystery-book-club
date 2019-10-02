import { User } from './user';
import {Book} from "./book";
export class Review {
    reviewId:number;
	 book:Book;
	 review:string;
	 dateWritten:Date;
	 user:User;
     
}