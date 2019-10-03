import { Publisher } from './publisher';
import { Author } from './author';

export class Book {
    bookId: number;
    isbn: number;
    title: string;
    publisher: Publisher;
    authors: Author[];
}
