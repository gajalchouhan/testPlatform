import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { map, take } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // public loggedInStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public loggedInStatus = false;

  constructor(private http: HttpClient) { }

  public baseUrl = 'http://52.66.210.125/auth';


  public loginUserDetails(req: any) {
    console.log(req);
    return this.http.post(`${this.baseUrl}/login`, req)
      .pipe(map(data => data));
  }

  public setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  // logout() {
  //   localStorage.removeItem('currentUser');
  // }

  public registerUser(req: any) {
    return this.http.post(`${this.baseUrl}/signup`, req).pipe(map(data => data));
  }
}
