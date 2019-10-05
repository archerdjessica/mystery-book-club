import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { GetAnimalComponent } from './get-animal/get-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';

const routes: Routes = [
  { path: 'animals', component: AnimalListComponent },
  { path: 'createAnimal', component: CreateAnimalComponent },
  { path: 'animal/', component: GetAnimalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    CreateAnimalComponent,
    GetAnimalComponent,
    UpdateAnimalComponent,
  ],
  imports: [
    // RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
