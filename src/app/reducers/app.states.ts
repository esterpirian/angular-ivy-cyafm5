import { user } from '../models/users';

export interface AppState {
  userState: UserState;
  userState1: UserState1;
}

export interface UserState {
  users?: user[];

  url?: string;
}
export interface UserState1 {
  userSearch?: string;
}
