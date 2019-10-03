import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
// import { UserEditInfoComponent } from './user-edit-info/user-edit-info.component';
import { UserBrowseBooksComponent } from './user-browse-books/user-browse-books.component';
import { UserAddBookToListComponent } from './user-add-book-to-list/user-add-book-to-list.component';
import { UserReadReviewComponent } from './user-read-review/user-read-review.component';
import { UserWriteReviewComponent } from './user-write-review/user-write-review.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminEditUserComponent } from './admin-edit-user/admin-edit-user.component';
import { AdminSearchUsersComponent } from './admin-search-users/admin-search-users.component';
import { AdminAddBookComponent } from './admin-add-book/admin-add-book.component';
import { AdminAddPublisherComponent } from './admin-add-publisher/admin-add-publisher.component';
import { AdminReadReviewComponent } from './admin-read-review/admin-read-review.component';
import { AdminApproveReviewComponent } from './admin-approve-review/admin-approve-review.component';
import { AdminEditReviewComponent } from './admin-edit-review/admin-edit-review.component';
import { AdminDeleteReviewComponent } from './admin-delete-review/admin-delete-review.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  // { path: 'editInfo', component: UserEditInfoComponent },
  { path: 'browseBooks', component: UserBrowseBooksComponent },
  { path: 'addBookToList', component: UserAddBookToListComponent },
  { path: 'review', component: UserReadReviewComponent },
  { path: 'writeReview', component: UserWriteReviewComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'adminedituserinfo', component: AdminEditUserComponent },
  { path: 'adminsearchusers', component: AdminSearchUsersComponent },
  { path: 'adminaddbook', component: AdminAddBookComponent },
  { path: 'adminaddpublisher', component: AdminAddPublisherComponent },
  { path: 'adminreadreview', component: AdminReadReviewComponent },
  { path: 'adminapprovereview', component: AdminApproveReviewComponent },
  { path: 'editReview', component: AdminEditReviewComponent },
  { path: 'deleteReview', component: AdminDeleteReviewComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    // UserEditInfoComponent,
    UserBrowseBooksComponent,
    UserAddBookToListComponent,
    UserReadReviewComponent,
    UserWriteReviewComponent,
    AdminLoginComponent,
    AdminEditUserComponent,
    AdminSearchUsersComponent,
    AdminAddBookComponent,
    AdminAddPublisherComponent,
    AdminReadReviewComponent,
    AdminApproveReviewComponent,
    AdminEditReviewComponent,
    AdminDeleteReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
