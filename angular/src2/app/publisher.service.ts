import { Injectable } from '@angular/core';
import { Publisher } from './publisher';
import { HttpClient } from '@angular/common/http';
   

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  private createPublisherUrl:string;
  private getPublisherUrl:string ;
  private updatePublisherUrl:string;
  private deletePublisherUrl:string;

  constructor(private http:HttpClient) { 
    this.createPublisherUrl ="";
    this.getPublisherUrl ="";
    this.updatePublisherUrl = "";
    this.deletePublisherUrl="";
    
  }
  createPublisher( publisher:Publisher){
      return this.http.post(this.createPublisherUrl, publisher);
  }
}
