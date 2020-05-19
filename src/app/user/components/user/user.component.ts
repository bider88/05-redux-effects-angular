import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { loadUser } from 'src/app/store/actions';
import { UserModel } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  user: UserModel;
  loading = false;
  error: any;
  userSubscriptions: Subscription[] = [];

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    const userSubscription = this.router.params.subscribe(({id}) => {
      if (id) {
        this.store.dispatch(loadUser({ id }));
      }
    });

    this.userSubscriptions.push(userSubscription);

    const storeSubscription = this.store.select('user').subscribe(({user, loading, error}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });

    this.userSubscriptions.push(storeSubscription);
  }

  ngOnDestroy() {
    this.userSubscriptions.forEach(subscription => subscription.unsubscribe())
  }

}
