import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UsersService } from './users.service';
import { UsersComponent } from './users.component';

@NgModule({
  imports:      [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserShowComponent
  ],
  providers:    [ UsersService ],
  bootstrap:    [ UsersComponent ]
})
export class UsersModule {
}
