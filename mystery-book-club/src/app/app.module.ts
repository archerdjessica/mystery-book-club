import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserEditInfoComponent } from './user-edit-info/user-edit-info.component';
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

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserEditInfoComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
