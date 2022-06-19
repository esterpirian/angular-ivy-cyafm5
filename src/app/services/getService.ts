import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class getService {
  constructor(private httpClient: HttpClient) {}

  doPost<T>(uri: string, params: any): Observable<T> {
    return this.httpClient.post<T>('api/' + uri, params);
  }
  doGet<T>(uri: string): Observable<T> {
    return this.httpClient.get<T>(uri);
  }
}
