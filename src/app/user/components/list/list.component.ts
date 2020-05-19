import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { loadUsers } from 'src/app/store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  users: UserModel[] = [];
  loading = false;
  error: any;
  userSubscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch( loadUsers() );
  }

  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
  }

}
