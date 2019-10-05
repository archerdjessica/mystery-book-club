import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publisher } from './publisher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherDataService {

  addPublisherUrl: string;
  getPublishersUrl: string;
  constructor(private http:HttpClient) { 
    this.addPublisherUrl="http://localhost:4000/addPublisher";
    this.getPublishersUrl="http://localhost:4000/publishers";
  }

  public addPublisher(publisher: Publisher){
    return this.http.post<Publisher>(this.addPublisherUrl, publisher);
  }

  public getPublisherList(): Observable<Publisher[]>{
    console.log("Getting publishers");
    return this.http.get<Publisher[]>(this.getPublishersUrl);
  }
}
