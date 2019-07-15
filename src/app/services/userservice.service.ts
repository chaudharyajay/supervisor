import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  constructor(private http: HttpClient) { }

  // private url : "http://13.232.238.220";

  httpsOptions = {
    headers :new HttpHeaders({'content-type':'application/json'})
  };

  signUp(user): Observable<any> {
    return this.http.post<any>('http://13.232.238.220/api/v1/user_details', user);
  }

  dummy(data) {
    return this.http.post('https://reqres.in/api/users', data);
  }


  
}
