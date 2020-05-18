import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = 'https://reqres.in/api/';

  constructor(
    private http: HttpClient
  ) { }

  getUserList(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.url}users?per_page=6`).pipe(
      map((response: any) => ([ ...response.data ] as UserModel[]))
    );
  }
}
