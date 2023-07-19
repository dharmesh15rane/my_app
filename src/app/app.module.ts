import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Registers/signup/signup.component';
import { NgModel } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ToDoListComponent } from './To_Do_List/to-do-list/to-do-list.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component'; 
import {ReactiveFormsModule} from'@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ToDoListComponent,
    AdminComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
