import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-animal',
  templateUrl: './get-animal.component.html',
  styleUrls: ['./get-animal.component.css']
})
export class GetAnimalComponent implements OnInit {

  animal: Animal;
  id: number;

  constructor(private animalService: AnimalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.animal = new Animal();
    this.id = this.route.snapshot.params['id'];

    this.animalService.getAnimal(this.id).subscribe(data => {
      console.log("getting...\n" + data)
      this.animal = data
    }, error => console.log(error));
  }

  getAll() {
    this.router.navigate(['animals']);
  }


}
