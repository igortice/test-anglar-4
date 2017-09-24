import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls:   [ './user-list.component.scss' ]
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'nome um' },
    { id: 2, name: 'nome dois' },
    { id: 3, name: 'nome tres' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
