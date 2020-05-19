import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usersActions from '../actions';
import { UserService } from 'src/app/services/user.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(usersActions.loadUsers),
    mergeMap(() =>
      this.userService.getUserList().pipe(
        map((users) => usersActions.loadUserSuccess({ users }) ),
        catchError(error => of(usersActions.loadUserError({ error }) ))
      )
    )
  );
}
