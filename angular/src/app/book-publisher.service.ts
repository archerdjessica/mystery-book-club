import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publisher } from './publisher';

@Injectable({
  providedIn: 'root'
})
export class BookPublisherService {
  private publisherURL: string;
  private addURL: string;
  constructor(private http: HttpClient) {
    this.publisherURL = "http://localhost:4000/getPublisher/";
    this.addURL = "http://localhost:4000/addPublisher";
   }

   createPublisher(publisher: Publisher){
    return this.http.post<Publisher>(this.publisherURL, publisher);
   }

   getPublisherById(id:number){
    return this.http.get<Publisher>(this.addURL + id); 
   }
}
