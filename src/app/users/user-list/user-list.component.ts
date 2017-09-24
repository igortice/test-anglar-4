import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector:    'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls:   [ './user-list.component.scss' ]
})
export class UserListComponent implements OnInit {
  users;

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
}
