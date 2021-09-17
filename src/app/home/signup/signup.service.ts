import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewUser} from './new-user';

const API_URL = 'http://localhost:3000'
@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {
  }

  checkUserNameTaken(username: string) {
    return this.http.get(API_URL + '/user/exists/' + username);
  }

  signup(newUser: NewUser) {
    return this.http.post(API_URL + '/user/signup', newUser);
  }
}
