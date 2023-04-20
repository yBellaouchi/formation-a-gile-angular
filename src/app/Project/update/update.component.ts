import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
  projet!: any
  form: FormGroup;
  history!:any;
  projectToUpdate :  any;
  nomProjet : any  ='test';
  constructor(private formBuilder: FormBuilder, private service: ProjectService, private router:Router) {
    // console.log(this.router.getCurrentNavigation()?.extras.state);
    this.history = history.state;
  
    this.form = formBuilder.group(
      {

        nameProject: ['', ],
        nameOpportunity:[],
        referenceClient: ['', ],
        description: ['', ],
        status: ['', ],
        montantPrestation: ['', ]
      }
    )
  }
  ngOnInit(): void {

    let id = this.history['id'];
    this.projectToUpdate = this.service.getProject(id, 'Projets').subscribe({
      next : (data) =>{
        console.log(data);
        this.projectToUpdate =data['element'];
        this.nomProjet=data['element']['Nom du projet'];
        console.log(this.nomProjet);
      }
    });
  }

  onSubmit() {
    
    
    console.log("submit", this.form.value)
    if (this.form.valid) {
      let id = this.history['id'];
      const project = {
        "Assigné à": "19x1",
        "Nom du projet": this.form.value.nameProject,
        "Reference client": this.form.value.referenceClient,
        "Statut": this.form.value.status,
        "Description": this.form.value.description,
        "Montant prestation":this.form.value.montantPrestation,
        "Environment": "87x16143",
        "projetsid": id
      }
        this.form.value;
      console.log(project);
      this.service.update({
        "elementType": "Projets",
        "data": project
      }
      ).subscribe({
        next: (data) => {
          console.log(data);
          this.service.redirectToList();
        },
        error: (error) => {
          if (error['error']['message'] === "Expired JWT Token") {
            this.service.redirectToLogin();
          }
        }
      });
    }
  }

}
