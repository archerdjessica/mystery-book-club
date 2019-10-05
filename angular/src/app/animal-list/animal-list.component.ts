import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Animal[];

  constructor(private animalService: AnimalService, private route: ActivatedRoute, private router: Router) { }
  // dependency injection

  ngOnInit() {
    this.animalService.getAllAnimals().subscribe(data => {
      this.animals = data;
    });

  }

  reloadData() {
    this.animalService.getAllAnimals().subscribe(data => { this.animals = data; });
  }

  deleteAnimal(animal: Animal) {
    this.animalService.deleteAnimal(animal).subscribe(data => { this.reloadData() });
  }

  update(animal: Animal) {

      this.animalService.updateAnimal(animal).subscribe(data => { this.reloadData() });
    }

  }
