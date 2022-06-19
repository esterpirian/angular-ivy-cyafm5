import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  map,
  switchMap,
  mergeMap,
  catchError,
  debounceTime,
} from 'rxjs/operators';
import * as fromActions from '../actions/user.action';
import { UserService } from '../services/userService';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  deletComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getUserJson),
      map((action) => action.payload),
      switchMap((url) =>
        this.userService
          .Getusers(url)
          .pipe(map((data) => fromActions.setUserlData({ payload: data })))
      )
    )
  );
}
