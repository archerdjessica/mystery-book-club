import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publisher } from './publisher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherDataService {
baseUrl:string;
  addPublisherUrl: string;
  getPublishersUrl: string;
  constructor(private http:HttpClient) { 
    this.baseUrl="http://3.15.222.76:5100";
    this.addPublisherUrl=this.baseUrl+"/addPublisher";
    this.getPublishersUrl=this.baseUrl+"/publishers";
  }

  public addPublisher(publisher: Publisher){
    return this.http.post<Publisher>(this.addPublisherUrl, publisher);
  }

  public getPublisherList(): Observable<Publisher[]>{
    console.log("Getting publishers");
    return this.http.get<Publisher[]>(this.getPublishersUrl);
  }
}
