import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  withCredentials: true
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/ong/login',
      {
        email,
        password,
      },
      httpOptions
    );
  }
  

  register(name: string, email: string, website: string, location:string,password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/ong/register',
      {
        name,
        location,
        website,
        email,
        password,
      },
      
      httpOptions, 
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + '/ong/logout', { },httpOptions);
  }
}
