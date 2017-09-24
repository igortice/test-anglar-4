import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UsersService } from '../users.service';

@Component({
  selector:    'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls:   [ './user-show.component.scss' ]
})
export class UserShowComponent implements OnInit {
  currentId: number;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.currentId = +this.route.snapshot.paramMap.get('id');
  }

  onActivate() {
    this.usersService.userActivatedId.next(this.currentId);
  }
}
