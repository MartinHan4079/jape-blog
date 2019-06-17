import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../http/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JapeCoreService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getContents(): Observable<any> {
    const url = this.auth.getBaseUrl() + '/contents/blog';
    return this.http.get<any>(url);
  }

  getPostDetail(name: string): Observable<Article> {
    const url = this.auth.getBaseUrl() + '/contents/blog/' + name;
    return this.http.get<Article>(url);
  }
}

export class Article {
  name: string;
  title: string;
  path: string;
  sha: string;
  size: string;
  type: string;
  url: string;
  encoding: string;
  content: string;
  year: string;
  month: string;
  day: string;
  'download_url': string;
  'git_url': string;
  'html_url': string;
}

export class ArticleList {
  name: string;
  title: string;
  path: '';
  sha: string;
  year: string;
  month: string;
  day: string;
  type: string;
  url: string;
  'html_url': string;
  'git_url': string;
  'download_url': string;
}


