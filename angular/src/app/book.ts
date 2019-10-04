import { Publisher } from './publisher';
import { Author } from './author';

export class Book {
    isbn: number;
    title: string;
    publisher: Publisher;
    authors: Author[];
}
