import { Book } from './book';


export class User {
    id: number;
    email: string;
    password: string;
    name: string;
    // birthday: Date;
    birthday:string;
    // readingList: Book[];
    readingList: string[];
}
