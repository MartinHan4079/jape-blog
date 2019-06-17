import { Injectable } from '@angular/core';

const TOKEN_PRV  =  'f03f71d43841e22962c6';
const TOKEN_NEXT =  'b40350f40db0ce9da3f8';
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
