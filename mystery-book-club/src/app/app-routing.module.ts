import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { AdminAddBookComponent} from './admin-add-book/admin-add-book.component';
import { AdminAddPublisherComponent} from './admin-add-publisher/admin-add-publisher.component';
import {UserAddBookToListComponent} from './user-add-book-to-list/user-add-book-to-list.component';
const routes: Routes = [
{path: 'addbook', component: UserAddBookToListComponent}, 
{path: 'adminaddbook', component: AdminAddBookComponent},
{path: 'addPublisher', component: AdminAddPublisherComponent},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
