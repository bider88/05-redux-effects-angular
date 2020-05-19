import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as userActions from '../actions';
import { UserService } from 'src/app/services/user.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(userActions.loadUser),
    mergeMap(( action ) =>
      this.userService.getUserById(action.id).pipe(
        map((user) => userActions.loadUserSuccess({ user }) ),
        catchError(error => of(userActions.loadUserError({ error }) ))
      )
    )
  );
}
