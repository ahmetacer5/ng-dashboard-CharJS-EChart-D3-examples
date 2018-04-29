import { Inject, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { DOCUMENT } from '@angular/common';
import { CustomURLSearchParams } from './CustomURLSearchParams';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class ApiService {
  apihost = environment.apihost;
  apibase = '/api';

  constructor(private http: Http,
              private router: Router,
              @Inject(DOCUMENT) private document: any) {
  }

  AddCurrency(currenyCode) {
    const body = new CustomURLSearchParams();
    body.set('currenyCode', currenyCode);

    return this.http.post(this.apihost + this.apibase + '/AddCurrency', body.toString(), this.jwt(true))
      .map((response: Response) => response.json());
  }

  GetCurrencyList() {
    const body = new CustomURLSearchParams();

    return this.http.post(this.apihost + this.apibase + '/GetCurrencyList', body.toString(), this.jwt(true))
      .map((response: Response) => response.json());
  }

  DeleteCurrency(currenyId) {
    const body = new CustomURLSearchParams();
    body.set('currenyId', currenyId);

    return this.http.post(this.apihost + this.apibase + '/DeleteCurrency', body.toString(), this.jwt(true))
      .map((response: Response) => response.json());
  }

  private jwt(forpost) {
    // create authorization header with jwt token
    const currentUser = JSON.parse(sessionStorage.getItem('SESSIONID'));
    if (currentUser && currentUser.token) {

      const headers = new Headers({'Content-Type': (!forpost ? 'application/json; charset=utf-8' : 'application/x-www-form-urlencoded')});
      const options = new RequestOptions({headers: headers});
      options.headers.set('x-access-token', currentUser.token);

      return new RequestOptions({headers: headers});
    }
  }
}
