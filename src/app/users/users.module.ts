import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserShowComponent } from './user-show/user-show.component';

@NgModule({
  imports:      [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserShowComponent
  ]
})
export class UsersModule {
}
