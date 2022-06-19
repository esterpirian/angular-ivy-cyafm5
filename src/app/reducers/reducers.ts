import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import * as fromUserReducer from './user.reducer';
import * as fromUserSetReducer from './setUser.reducer';
export const reducers: ActionReducerMap<AppState> = {
  userState: fromUserReducer.userReducer,
  userState1:fromUserSetReducer.userReducer1
};
