import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getService } from './getService';
import { user } from '../models/users';

@Injectable()
export class UserService {
  constructor(private postService: getService) {}

  Getusers(url: string): Observable<user[]> {
    return this.postService.doGet<user[]>(url);
  }
}
