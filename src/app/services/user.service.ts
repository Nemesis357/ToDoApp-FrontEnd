import { Injectable } from '@angular/core';
import { LocalStorage, JSONSchema } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  constructor(protected localStorage: LocalStorage) {}

  isSet() {
    const schema: JSONSchema = {
      properties: {
        accessToken: { type: 'string' },
        tokenType: { type: 'string' },
        userId: { type: 'integer'},
        username: { type: 'string'}
      },
      required: ['accessToken', 'tokenType', 'userId']
    };
    return this.localStorage.getItem<any>('user', { schema });
  }

  removeUser() {
    return this.localStorage.removeItem('user');
  }

  addUser(user) {
    return this.localStorage.setItem('user', user);
  }

  getUser() {
    return this.localStorage.getItem('user');
  }
}
