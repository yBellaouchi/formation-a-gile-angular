import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './Project/list/list.component';
import { UserListComponent } from './user-list/user-list.component';
import {  HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ShowComponent } from './Project/details/show.component';
import { tokenInterceptorService } from './service/token-interceptor.service';
import { AddComponent } from './Project/add/add.component';
import { UpdateComponent } from './Project/update/update.component';
import { MercureComponent } from './mercure/mercure.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    UserListComponent,
    ShowComponent,
    AddComponent,
    UpdateComponent,
    MercureComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass : tokenInterceptorService, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
