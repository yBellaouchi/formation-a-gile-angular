import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/service/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  projet!: any
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: ProjectService, private router:Router) {
    this.form = formBuilder.group(
      {

        nameProject: ['', ],
        nameOpportunity: ['', ],
        referenceClient: ['', ],
        description: ['', ],
        status: ['', ],
        montantPrestation: ['',],
        volumeRestant: ['', ],

      }
    )
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("submit", this.form.value);
      const project = {
        "Assigné à": "19x1",
        "Nom du projet": this.form.value.nameProject,
        "Reference client": this.form.value.referenceClient,
        "Statut": this.form.value.status,
        "Description": this.form.value.description,
        "Montant prestation":this.form.value.montantPrestation,
        "Volume restant MWhc": this.form.value.volumeRestant,
        "Environment": "87x16143"
      }
        this.form.value;


      console.log(project);
      this.service.add({
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
