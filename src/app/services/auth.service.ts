import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$= this._isLoggedIn$.asObservable();
  // public readonly TOKEN_NAME ='user'

  get sessionId(){
    return sessionStorage.getItem('user');
  }

  constructor(private http : HttpClient) { 
    
    this._isLoggedIn$.next(!!this.sessionId);
  }

  login(email,password):Observable<any>{
    return this.http.post<any>(`http://13.245.165.147/api/auth/login`, {
      email,
      password
    })
    .pipe(
      tap((response:any)=>{
        this._isLoggedIn$.next(true);
        sessionStorage.setItem('user',response.sessionId)

      })
    )
  }
}
