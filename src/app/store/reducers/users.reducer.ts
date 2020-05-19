import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUserSuccess, loadUserError } from '../actions';
import { UserModel } from 'src/app/models/user.model';

export interface UserState {
  users: UserModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: UserState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

const usersInternalReducer = createReducer(userInitialState,

  on(loadUsers, state => ({ ...state, loading: true})),
  on(loadUserSuccess, (state, props) => ({
    ...state,
    loaded: true,
    loading: false,
    users: [...props.users]
  })),
  on(loadUserError, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error
  })),

);

export function usersReducer(state, action) {
  return usersInternalReducer(state, action);
}
