import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { map, filter, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { delay } from 'rxjs/operators/delay';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/forkJoin';
import { User } from '../model/user';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private user: UserService) { }

  signUp(user) {
    return this.http.post('http://localhost:8080/auth/signup', user);
  }

  signIn(user) {
    return this.http.post('http://localhost:8080/auth/signin', user);
  }

  createNew(task) {
    return this.user.getUser().switchMap(res => {
      let headers = this.generateHeader(res);
      task['userId'] = res.userId;
      return this.http.post('http://localhost:8080/create', task, { headers });
    })
  }

  getTasks() {
    return this.user.getUser().switchMap(res => {
      let headers = this.generateHeader(res);
      return this.http.get<any[]>('http://localhost:8080/getTasks/' + res.userId, { headers });
    })
  }

  isAdmin() {
    return this.user.getUser().switchMap(res => {
      let headers = this.generateHeader(res);
      return this.http.get('http://localhost:8080/isAdmin/' + res.userId, { headers });
    });
  }

  getUsers() {
    return this.user.getUser().switchMap(res => {
      let headers = this.generateHeader(res);
      return this.http.get<string[]>('http://localhost:8080/getUsers', { headers });
    });
  }

  getUser(username) {
    return this.user.getUser().switchMap(res => {
      let headers = this.generateHeader(res);
      return this.http.get<User>('http://localhost:8080/getUser/'+ username, { headers });
    });
  }

  deleteUser(userId) {
    return this.user.getUser().switchMap(res => {
      let headers = this.generateHeader(res);
      return this.http.delete('http://localhost:8080/deleteUser/'+ userId, { headers });
    });
  }

  deleteUserByUsername(username) {
    return this.user.getUser().switchMap(res => {
      let headers = this.generateHeader(res);
      return this.http.delete('http://localhost:8080/deleteUserByUsername/'+ username, { headers })
    })
  }

  makeAdmin(userId) {
    return this.user.getUser().switchMap(res => {
      let headers = this.generateHeader(res);
      return this.http.get('http://localhost:8080/makeAdmin/'+ userId, { headers })
    })
  }

  makeUser(userId) {
    return this.user.getUser().switchMap(res => {
      let headers = this.generateHeader(res);
      return this.http.get('http://localhost:8080/makeUser/'+ userId, { headers })
    })
  }

  // Generate header
  generateHeader(input) {
    const token = input.tokenType + " " + input.accessToken;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return headers;
  }
}
