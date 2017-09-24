import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector:    'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls:   [ './user-show.component.scss' ]
})
export class UserShowComponent implements OnInit {
  currentId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentId = +this.route.snapshot.paramMap.get('id');
  }
}
