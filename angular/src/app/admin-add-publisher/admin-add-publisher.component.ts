import { Component } from '@angular/core';
import {Publisher} from '../publisher'; 
//import {PublisherService} from '../publisher.service'
import { BookPublisherService } from '../book-publisher.service';


@Component({
  selector: 'app-admin-add-publisher',
  templateUrl: './admin-add-publisher.component.html',
  styleUrls: ['./admin-add-publisher.component.css']
})
export class AdminAddPublisherComponent {
  publisher: Publisher;
  constructor(private  publisherservice:BookPublisherService ) { 
    this.publisher = new Publisher();
  }

  public createPublisher(){
    this.publisherservice.createPublisher(this.publisher);

  }

}
