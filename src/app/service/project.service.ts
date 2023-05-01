import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { SSE } from 'sse.js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { SSE } from 'sse.js';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
   token!: string;
  apiURL !:string;
  isLogged!: boolean;
  // eventSource: SSE;
  constructor(private http: HttpClient, private router:Router) {
    this.token = this.getToken();
    this.apiURL = environment.apiURL;
    
  }
 

  getToken() {
    return ("bearer " + localStorage.getItem('token'));
  }
  getProject(id:any, elementType:any): Observable<any> {
    // let params = new HttpParams().set("id", info.id).set("elementType", info.elementType).set("currentUser", info.currentUser).set("accessKey", info.accessKey);
    return this.http.get("http://127.0.0.1:8000/api/test/service/retrieve/",{params: new HttpParams().set("id", id).set("elementType", elementType)});
  }

  getAllProjects(elementType: any): Observable<any> {
    // let params = new HttpParams().set("elementType", info.elementType).set("currentUser", info.currentUser).set("accessKey", info.accessKey);
    return this.http.get(this.apiURL+"/get-all/", {params: new HttpParams().set("elementType", elementType)});
  }

  redirectToLogin() {
    return this.router.navigate(['/']);
  }
  Logout() {
    console.log(localStorage.getItem('token'));
    localStorage.removeItem('token');
    localStorage.removeItem('isLogged');
    return this.router.navigate(['/']);
  }

  redirectToList() {
    return this.router.navigate(['/projets']);
  }

  getALLUser(): Observable<any> {
    console.log(this.token);
    return this.http.get("http://127.0.0.1:8000/api/getAllUser");
  }
  login(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api/login_check", user);
  }
  add(projet: any): Observable<any> {
    return this.http.post(this.apiURL+"/create", projet);
  }
  update(projet: any): Observable<any> {
    return this.http.post(this.apiURL+"/edit", projet);
  }
  delete(id: any): Observable<any> {
    // int
    return this.http.get(this.apiURL+"/delete", {params: new HttpParams().set("id", id)} );
    // return this.http.get(this.apiURL+"/delete", {'id': id } );
  }
  notify(): Observable<any> {
    
    return this.http.get("https://127.0.0.1:8000/test/service/publish")
    // console.log(this.http.get("https://127.0.0.1:8000/test/service/publish"));
    // return this.http.get("https://127.0.0.1:8000/test/service/publish");
    // return this.http.get(this.apiURL+"/delete", {'id': id } );
  }

  getServerSentEvent(){
  const eventSource = new EventSource('http://localhost:3000/.well-known/mercure?topic=chat');
 console.log(eventSource);

   eventSource.onmessage = event =>{
        console.log("success" , event);
        console.log((JSON.parse(event.data)).status)
        localStorage.setItem('message',(JSON.parse(event.data)).status)
        
      }
      eventSource.onerror = event =>{
        console.log("error" , event);
      }
  }

}
