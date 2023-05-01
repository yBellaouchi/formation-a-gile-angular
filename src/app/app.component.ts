import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './service/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Formation';
  isLogged!: any;
  constructor(private service:ProjectService, private router: Router) {
    if(localStorage.getItem('isLogged')!== null){
      this.isLogged = localStorage.getItem('isLogged');
    }
  }

  logout(){
    this.service.Logout();
    this.isLogged = 'false';
  }
}
