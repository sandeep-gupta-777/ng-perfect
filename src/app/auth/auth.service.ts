import {Injectable} from '@angular/core';
import {HttpService} from '../../../projects/http/src/lib/http.service';
import {ILoginData, IUser} from '../typings/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) {
  }

  performLogin(loginData: ILoginData) {
    const url = `https://conduit.productionready.io/api/users/login`;
    const body = {user: loginData};
    return this.httpService.makePostReq<{ user: IUser }>(url, body);
  }
}
