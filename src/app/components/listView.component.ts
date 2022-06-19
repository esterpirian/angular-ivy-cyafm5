import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import * as fromReducer from '../reducers/user.reducer';
import * as fromReducerSet from '../reducers/setUser.reducer';
import * as fromActions from '../actions/user.action';
import * as fromActions1 from '../actions/userSet.action';
import { UserState } from '../reducers/app.states';
import { user } from '../models/users';
@Component({
  selector: 'list-view',
  templateUrl: 'listView.component.html',
})
export class ListComponent implements OnInit {
  users$: Observable<user[] | undefined>;
  selectedValue: string = '';
  search: string;
  
  constructor(private user: UserService, private store: Store<UserState>) {
    this.users$ = store.select(fromReducer.getUsers);
  
   
    this.store
      .select(fromReducerSet.getUsersSearch)
      .subscribe((res?: string) => {
        this.search = res || '';
      
      });
  }
 
  ngOnInit() {
    this.store.dispatch(
      fromActions.getUserJson({ payload: 'assets/users.json' })
    );
  }
  selectCity(val: string) {
    this.search = val;
    this.store.dispatch(fromActions1.setUserSearch({ userSearchG: val }));
  }
}
