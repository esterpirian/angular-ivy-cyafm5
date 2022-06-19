import { createAction, props } from '@ngrx/store';

export const getUserSearch = createAction('[user] getUserSearch');
export const setUserSearch = createAction(
  '[user] setUserSearch',
  props<{ userSearchG: string }>()
);
