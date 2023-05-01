import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './Project/list/list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ShowComponent } from './Project/details/show.component';
import { AddComponent } from './Project/add/add.component';
import { UpdateComponent } from './Project/update/update.component';
import { MercureComponent } from './mercure/mercure.component';
// import { ShowComponent } from './Project/show/show.component';

const routes: Routes = [
  {
   
        path: '',
        component: LoginComponent
     
  },
  {
        path: 'details',
        component: ShowComponent
     
  },
  {
   
        path: 'users',
        component: UserListComponent
     
  },
  {

        path: 'projets',
        component: ListComponent
     
  },
  {
    
        path: 'add',
        component: AddComponent
      
  },
  {
    
        path: 'update',
        component: UpdateComponent
      
  },
  {
    
        path: 'mercure',
        component: MercureComponent
      
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
