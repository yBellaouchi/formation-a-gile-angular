import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ProjectService } from '../service/project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  toke:any;
  isLogged!:boolean;
  constructor(private fb: FormBuilder, private service:ProjectService, private router:Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log("submit", this.loginForm.value)
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
       this.service.login(user).subscribe({
        next :(data)=>{
          if(data!= null){
            localStorage.setItem('token', data['token']);
            localStorage.setItem('isLogged','true');
            this.router.navigate(['/projets']);
          }
         this.router.navigate(['/projets']);
         
        }
      });
    }
    // console.log(this.loginForm.value);
  }
}
