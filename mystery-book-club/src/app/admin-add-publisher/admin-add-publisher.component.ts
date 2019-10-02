import { Component, OnInit } from '@angular/core';
import {Publisher} from '../publisher'; 

@Component({
  selector: 'app-admin-add-publisher',
  templateUrl: './admin-add-publisher.component.html',
  styleUrls: ['./admin-add-publisher.component.css']
})
export class AdminAddPublisherComponent implements OnInit {
  publisher: Publisher;
  constructor() { 
    this.publisher = new Publisher();
  }
  ngOnInit() {
  }

}
