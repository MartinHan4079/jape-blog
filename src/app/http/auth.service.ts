import { Injectable } from '@angular/core';

const TOKEN_PRV  =  'Bearer 785839c13f67792ec0b2';
const TOKEN_NEXT =  '90215fe593c59c6c9f1e';
const AUTH_TOKEN = TOKEN_PRV + TOKEN_NEXT;

const BASEURL = 'https://api.github.com/repos/jackeybiao/japeBlog';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: string;

  private baseUrl: string;

  constructor() { }

  getAuthorizationToken(): string {
    this.authToken = AUTH_TOKEN;
    return this.authToken;
  }

  getBaseUrl(): string {
    this.baseUrl = BASEURL;
    return this.baseUrl;
  }

}
