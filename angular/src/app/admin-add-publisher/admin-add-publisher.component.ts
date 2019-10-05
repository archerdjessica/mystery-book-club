import { Component, OnInit } from '@angular/core';
import { Publisher } from '../publisher';
import { PublisherDataService } from '../publisher-data.service';

@Component({
  selector: 'app-admin-add-publisher',
  templateUrl: './admin-add-publisher.component.html',
  styleUrls: ['./admin-add-publisher.component.css']
})
export class AdminAddPublisherComponent implements OnInit {

  publisher: Publisher;
  constructor(private publisherService: PublisherDataService) {
    this.publisher = new Publisher();
  }

  ngOnInit() {
    document.getElementById("message").hidden = true;
  }
  public addPublisher() {
    this.publisherService.addPublisher(this.publisher).subscribe(data => this.publisher);
    console.log(this.publisher.pubName);
    document.getElementById("message").hidden = false;
    document.getElementById("message").innerText += this.publisher.pubName;
  }
}
