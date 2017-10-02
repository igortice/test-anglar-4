import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  userActivatedId = new Subject();
  users: User[];
  URL = 'https://igortice-test-angular-4.firebaseio.com';

  constructor(private http: HttpClient) {
    this.users = [];
    // this.users = [
    //   new User(1, 'igor rocha', 'inativo'),
    //   new User(2, 'iandara girao', 'inativo'),
    //   new User(3, 'gabriel bezerra', 'inativo'),
    // ];
  }

  all<User>() {
    return this.http.get(this.URL + '/users.json');
  }

  save(users: any[]) {
    this.http.put(this.URL + '/users.json', users);
  }

}
