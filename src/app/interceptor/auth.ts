import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'app/services/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authservice : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
             const  token  = this.authservice.sessionId
             console.log(token)
            req = req.clone({
                setHeaders:{
                    
                    Authorization : `Bearer ${token || ''}`
                }
            }) 
            
             return next.handle(req)    
    }
    
}

export const AuthInterceptorProvider ={
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi : true
};