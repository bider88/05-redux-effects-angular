import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const loadUsers = createAction('[User Component] Load Users');
export const loadUserSuccess = createAction('[User Component] Load Users Success', props<{ users: UserModel[] }>());
export const loadUserError = createAction('[User Component] Load Users Error', props<{ error: any }>());
