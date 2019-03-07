import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
const api = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class VisitService {
  
  // headers = new HttpHeaders({'Content-Type': 'application/json'})
  

  constructor(private http:HttpClient) {
 
   }

  saveVisit(user:User): Observable<any>{
    return this.http.post<User>(api+'/persons', user, httpOptions);
  }
}
