import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-mercure',
  templateUrl: './mercure.component.html',
  styleUrls: ['./mercure.component.scss']
})
export class MercureComponent implements OnInit {

  message:any;

  constructor(private service:ProjectService,  ) { 
    this.message != localStorage.getItem("message");
  }

  ngOnInit(): void {
    this.service.getServerSentEvent();
    console.log('msg',this.message);
  }
  notify(){
    // console.log(this.service.notify());
     this.service.notify().subscribe(
      message =>this.message=message.status
      
     );
     setTimeout(()=>{                           //<<<---using ()=> syntax
      this.message = "";
 }, 3000);
     console.log('msg',this.message)
     console.log('notified',this.service.notify());
     
  }
}
