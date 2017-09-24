import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector:    'app-users',
  templateUrl: './users.component.html',
  providers:   [ UsersService ]
})
export class UsersComponent {
  constructor() { }
}
