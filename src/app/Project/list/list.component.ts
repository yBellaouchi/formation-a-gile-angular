import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  projets !: [];
  msg !: string;
  // form:FormGroup;
  constructor(private formBuilder: FormBuilder, private service: ProjectService, public router: Router) {
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
        if (error['error']['message'] === "Expired JWT Token") {
          this.service.redirectToLogin();
        }
      }
    });
  }
  delete(id:any){
    console.log(id);
    this.service.delete(id).subscribe({
      next:(data) =>{
        console.log(data);
        this.router.navigate(['/projets'])
      },
      error: (error) => {
        if (error['error']['message'] === "Expired JWT Token") {
          this.service.redirectToLogin();
        }
      }
    })
  }
  update( id:any){
    this.router.navigateByUrl('/update', { state: { id:id} });
  }
  details( id:any){
    this.router.navigateByUrl('/details', { state: { id:id } });
  }


  
}


