import { Book } from './book';
import { User } from './user';

export class Review {
    reviewId: number;
    book: Book;
    reviewBody: string;
    dateWritten: Date;
    user: User;
}
