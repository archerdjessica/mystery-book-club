import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publisher } from './publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherDataService {

  addPublisherUrl: string;
  constructor(private http:HttpClient) { 
    this.addPublisherUrl="http://localhost:4000/addPublisher";
  }

  public addPublisher(publisher: Publisher){
    return this.http.post<Publisher>(this.addPublisherUrl, publisher);
  }
}
