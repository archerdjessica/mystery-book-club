import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddBookToListComponent} from './user-add-book-to-list/user-add-book-to-list.component';
import { FormsModule } from '@angular/forms';
import { AppComponent }         from './app.component';

import { BrowserModule }  from '@angular/platform-browser';

import { HttpClientModule }    from '@angular/common/http';


const routes: Routes = [
{path: 'addbook', component: UserAddBookToListComponent} 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
