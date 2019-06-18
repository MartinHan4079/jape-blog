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


  getYear(list: Array<ArticleList>): Array<string> {
    const year = [];
    list.forEach(element => {
      if (!year.includes(element.year)) {
        year.push(element.year);
      }
    });
    const sortYear = year.sort((a, b) => b - a);
    return sortYear;
  }

  getMonth(list: Array<ArticleList>): Array<string> {
    list.sort(compare('day'));
    const month = [];
    const year = this.getYear(list);
    year.forEach(ele => {
      const min = {
        year: ele,
        children: []
      };
      list.forEach(element => {
        if (ele === element.year) {
          if (!min.children.includes(element.month)) {
            min.children.push(element.month);
          }
        }
      });
      min.children.sort((a, b) => b - a);
      month.push(min);
    });
    return month;
  }

}

function compare(property) {
  return (a, b) => {
      const value1 = a[property];
      const value2 = b[property];
      return value1 - value2;
  };
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


