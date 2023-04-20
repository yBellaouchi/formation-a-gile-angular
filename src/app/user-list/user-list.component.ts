import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 users!:User[];
  constructor(private service:ProjectService) { }

  ngOnInit(): void {
    console.log(this.getAll());
  }

  getAll(){
    this.users=[];
    this.service.getALLUser().subscribe({
      next :(data)=>{
        this.users=data['users'];
        console.log(this.users);
      }
    })
  }

}
