import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
  userActivatedId = new Subject();
  users           = [
    { id: 1, name: 'nome um', status: '' },
    { id: 2, name: 'nome dois', status: '' },
    { id: 3, name: 'nome tres', status: '' }
  ];

  constructor() { }

}
