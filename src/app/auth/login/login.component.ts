import {Component, OnInit} from '@angular/core';
import {ILoginData} from '../../typings/auth';
import {Store} from '@ngxs/store';
import {Login$} from '../state/auth.actions';

@Component({
  selector: 'ngp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) {

  }

  ngOnInit(): void {
  }

  loginSubmitHandler(loginData: ILoginData) {
    this.store.dispatch(new Login$({loginData}));
  }

}
