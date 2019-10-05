import { Component, OnInit } from '@angular/core';
import {Publisher} from '../publisher'; 
import {PublisherService} from '../publisher.service'

@Component({
  selector: 'app-admin-add-publisher',
  templateUrl: './admin-add-publisher.component.html',
  styleUrls: ['./admin-add-publisher.component.css']
})
export class AdminAddPublisherComponent implements OnInit {
  publisher: Publisher;
  constructor(private  publisherservice:PublisherService ) { 
    this.publisher = new Publisher();
  }
  ngOnInit() {
  }
  createPublisher(){
    this.publisherservice.createPublisher(this.publisher);
  }

}
