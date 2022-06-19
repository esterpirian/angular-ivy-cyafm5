import {
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
  Action,
} from '@ngrx/store';
import * as fromActions from '../actions/user.action';
import { UserState, UserState1 } from './app.states';

export const initialState: UserState = { users: [], url: '' };

// Creating reducer
const _useReducer = createReducer(
  initialState,

  on(fromActions.getUserJson, (state, { payload }) => ({ url: payload })),

  // on(fromActions.setUserSearch, (state, { userSearchG }) => ({
  //   userSearch: userSearchG,
  // })),
  on(fromActions.setUserlData, (state, { payload }) => ({ users: payload }))
);

export function userReducer(state: any, action: Action) {
  return _useReducer(state, action);
}

// Creating selectors
export const getUserState = createFeatureSelector<UserState>('userState');

export const getUsers = createSelector(
  getUserState,
  (state: UserState) => state.users
);
