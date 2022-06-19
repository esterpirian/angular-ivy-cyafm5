import {
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
  Action,
} from '@ngrx/store';
import * as fromActions from '../actions/userSet.action';
import { UserState, UserState1 } from './app.states';

export const initialState1: UserState1 = { userSearch: '' };
// Creating reducer

const _useReducer1 = createReducer(
  initialState1,

   //on(fromActions.setUserSearch, (state, { payload }) => ({ url: payload })),

  on(fromActions.setUserSearch, (state, { userSearchG }) => ({
    userSearch: userSearchG,
  }))
);

export function userReducer1(state: any, action: Action) {
  return _useReducer1(state, action);
}

// Creating selectors
export const getUserState1 = createFeatureSelector<UserState1>('userState');

export const getUsersSearch = createSelector(
  getUserState1,
  (state: UserState1) => state.userSearch
);
