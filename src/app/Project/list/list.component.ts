import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  projets !: [];
  msg !: string;
  // form:FormGroup;
  constructor( private service: ProjectService, public router: Router) {
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    let elementType = "Projets";
    this.service.getAllProjects(elementType).subscribe({
      next: (data) => {
        this.projets = data['all projects'];
        console.log(data['all projects']);
        
        
      },
      error: (error) => {
        console.log(error);
        if (error['error']['message'].includes(" JWT Token")) {
          this.service.redirectToLogin();
        }
      }
    });
  }
  delete(id:any) {
    console.log(this.projets);
    let i = this.projets.findIndex(x => x['projetsid'] === id);
    this.service.delete(id).subscribe({
      next:(data) => {
        console.log(data); 
        this.projets.splice(i,1);
       },
      error: (error) => {
        if (error['error']['message'] === "Expired JWT Token") {
          this.service.redirectToLogin();
        }
      }
    })
  }
  update( id:any) {
    this.router.navigateByUrl('/update', { state: { id:id} });
  }
  details( id:any) {
    this.router.navigateByUrl('/details', { state: { id:id } });
  }


  
}


