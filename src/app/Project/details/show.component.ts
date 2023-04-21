import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  projet!:any;
  history!:any;
  constructor( private service:ProjectService, private router: Router, private route:ActivatedRoute) { 

  }
    ngOnInit(): void {
      this.history = history.state;
      let elementType = 'Projets';
      let id = this.history['id'];
      this.projet = this.service.getProject(id, elementType).subscribe({
        next : (data) =>{
          this.projet =data['element'];
          console.log(this.projet);
        },
        error: (error) => {
          if (error['error']['message'] === "Expired JWT Token") {
            this.service.redirectToLogin();
          }
        }
      })
      }
    

}
