import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: Observable<UserModel[]>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUserList();
  }

}
