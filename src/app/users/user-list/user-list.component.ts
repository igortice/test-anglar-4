import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../_models/user';

@Component({
  selector:    'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls:   [ './user-list.component.scss' ]
})
export class UserListComponent implements OnInit {
  users: User[];
  filterUser: User = new User();
  newUser: User = new User();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.users;

    this.usersService.userActivatedId.subscribe(
      (id: number) => {
        this.users[ id - 1 ].status = 'ativo';
        console.log(this.users);
      }
    );
  }

  openModalNewUser(): void {
    this.newUser = new User();
    this.newUser.status = 'inativo';
  }

  createNewUser(): void {
    this.newUser.id = this.users.length + 1
    this.users.push(this.newUser);
  }
}
