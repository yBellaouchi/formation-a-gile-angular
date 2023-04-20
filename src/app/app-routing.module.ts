import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './Project/list/list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ShowComponent } from './Project/details/show.component';
import { AddComponent } from './Project/add/add.component';
import { UpdateComponent } from './Project/update/update.component';
// import { ShowComponent } from './Project/show/show.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'details',
        component: ShowComponent
      }
    ]
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'users',
        component: UserListComponent
      }
    ]
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'projets',
        component: ListComponent
      }
    ]
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'add',
        component: AddComponent
      }
    ]
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'update',
        component: UpdateComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
