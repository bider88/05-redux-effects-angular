import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions';
import { UserModel } from 'src/app/models/user.model';

export interface UsersState {
  users: UserModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

const usersInternalReducer = createReducer(usersInitialState,

  on(loadUsers, state => ({ ...state, loading: true})),
  on(loadUsersSuccess, (state, props) => ({
    ...state,
    loaded: true,
    loading: false,
    users: [...props.users]
  })),
  on(loadUsersError, (state, { error }) => ({
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

export function usersReducer(state, action) {
  return usersInternalReducer(state, action);
}
