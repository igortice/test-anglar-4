import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path:     'users',
    component: UsersComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: ':id/show', component: UserShowComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule {
}
