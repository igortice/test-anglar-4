import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from '../_models/user';

@Injectable()
export class UsersService {
  userActivatedId = new Subject();
  users: User[];

  constructor() {
    this.users = [
      new User(1, 'igor rocha', 'inativo'),
      new User(2, 'iandara girao', 'inativo'),
      new User(3, 'gabriel bezerra', 'inativo'),
    ];
  }

}
