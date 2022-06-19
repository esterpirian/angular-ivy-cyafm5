import { createAction, props } from '@ngrx/store';
import { user } from '../models/users';
export const getUserJson = createAction(
  '[user] getUserJson',
  props<{ payload: string }>()
);

export const setUserlData = createAction(
  '[user] setUserlData',
  props<{ payload: user[] }>()
);
