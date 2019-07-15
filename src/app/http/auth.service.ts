import { Injectable } from '@angular/core';

const TOKEN_PRV  =  'Bearer 8c6b61d44940a72f8b49';
const TOKEN_NEXT =  '449b8a47c20b58684b3b';
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
