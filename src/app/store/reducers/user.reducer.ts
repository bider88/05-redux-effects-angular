import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';
import { UserModel } from 'src/app/models/user.model';

export interface UserState {
  id: string;
  user: UserModel;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
};

const userInternalReducer = createReducer(userInitialState,

  on(loadUser, (state, { id }) => ({
    ...state,
    loading: true,
    id
  })),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    loaded: true,
    loading: false,
    user: { ...user }
  })),
  on(loadUserError, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error: {
      url: error.url,
      name: error.name,
      message: error.message
    }
  })),

);

export function userReducer(state, action) {
  return userInternalReducer(state, action);
}
