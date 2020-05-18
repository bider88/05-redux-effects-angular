import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    ListComponent,
    UserComponent
  ],
  exports: [
    ListComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
