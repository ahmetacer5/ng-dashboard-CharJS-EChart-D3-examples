import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { CustomURLSearchParams } from './CustomURLSearchParams';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthenticationService {
  apihost = environment.apihost;
  apibase = '/auth';

  constructor(private http: Http) {
  }


  encryptPw(value) {
    const key = CryptoJS.enc.Base64.parse('37KvDCAC11CCXLOKSX4CvjYOh9Y');
    const iv = CryptoJS.enc.Base64.parse('#base64IV#');
    const encryptedpw = CryptoJS.AES.encrypt(value, key, {iv: iv});
    return encryptedpw.toString();
  }

  login(username: string, password: string) {
    const body = new CustomURLSearchParams();
    body.set('username', username);
    body.set('password', this.encryptPw(password));

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.apihost + this.apibase + '/authenticate', body.toString(), {headers: headers})
      .map((response: Response) => response.json());
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('SESSIONID');
  }

}

