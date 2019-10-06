import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Animal } from './animal';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private baseUrl:string;
  private createUrl: string;
  private getAnimalsUrl: string;
  private getByIdUrl: string;
  private deleteUrl: string;
  private updateUrl: string;

  constructor(private http: HttpClient, private router:Router) {
    this.baseUrl="http://3.15.222.76:5100";
    this.createUrl = this.baseUrl+"/createAnimal";
    this.getAnimalsUrl = this.baseUrl+"/animals";
    this.getByIdUrl = this.baseUrl+"/animal/";
    this.deleteUrl = this.baseUrl+"/animal/";
    this.updateUrl = this.baseUrl+"/updateAnimal";
  }

  public getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.getAnimalsUrl);
  }

  public createAnimal(animal: Animal) {
    return this.http.post<Animal>(this.createUrl, animal);
  }

  public deleteAnimal(animal:Animal):Observable<Animal> {
    console.log("redirecting to "+this.deleteUrl+animal.id)
    return this.http.delete<Animal>(this.deleteUrl+animal.id);
  }

  public getAnimal(id: number): Observable<Animal> {
    return this.http.get<Animal>(this.getByIdUrl+id);
  }

  public updateAnimal(animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(this.updateUrl, animal);
  }



}
