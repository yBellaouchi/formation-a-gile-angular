
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from './project.service';

@Injectable()
export class tokenInterceptorService implements HttpInterceptor {
 params:any;
  // .append('Authorization', `Bearer ${this.service.getToken()}`);
  constructor(private service: ProjectService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
      .append('Authorization', this.service.getToken());
    // let modifiedReq = req.clone({ headers });
    // set("id", "57x26892").
  //  let params = new HttpParams().set("id", "57x26872").set("elementType", "Projets").set("currentUser","youness.bellaouchi@a-gile.com" ).set("accessKey", "5xq3wNkxNuKq5orC");
    //  let params = new HttpParams().set("currentUser","youness.bellaouchi@a-gile.com" ).set("accessKey", "5xq3wNkxNuKq5orC");
    let modifiedReq = req.clone({headers});
    return next.handle(modifiedReq);
  }
}





