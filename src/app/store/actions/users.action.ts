import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const loadUsers = createAction('[Users Component] Load Users');
export const loadUsersSuccess = createAction('[Users Component] Load Users Success', props<{ users: UserModel[] }>());
export const loadUsersError = createAction('[Users Component] Load Users Error', props<{ error: any }>());
