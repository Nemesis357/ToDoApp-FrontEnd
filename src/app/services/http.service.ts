import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getResources() {
    return this.http.get('http://localhost:8080/resource');
  }

  signUp(user) {
    return this.http.post('http://localhost:8080/sign-up', user);
  }

}
