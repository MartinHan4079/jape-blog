import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../http/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JapeCoreService {

  articleList: Array<ArticleList>;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  setArticleList(list: Array<ArticleList>) {
    this.articleList = list;
  }

  getContents(): Observable<any> {
    const url = this.auth.getBaseUrl() + '/contents/blog';
    return this.http.get<any>(url);
  }

  getPostDetail(sha: string): Observable<Article> {
    const url = this.auth.getBaseUrl() + '/git/blobs/' + sha;
    return this.http.get<Article>(url);
  }

  setPostDetail(params: object): Observable<Article> {
    const url = this.auth.getBaseUrl() + '/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391';
    return this.http.post<Article>(url, params);
  }

  setComments(body: object): Observable<Comments> {
    const url = this.auth.getBaseUrl() + '/issues/1/comments';
    return this.http.post<Comments>(url, body);
  }

  getComments(): Observable<Array<Comments>> {
    const url = this.auth.getBaseUrl() + '/issues/1/comments';
    return this.http.get<Array<Comments>>(url);
  }

  searchPost(name: string): Array<ArticleList> {
    const searchResult =  this.articleList.filter(element => element.name.indexOf(name) !== -1);
    return searchResult;
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
      return value2 - value1;
  };
}

export class Article {
  sha: string;
  size: string;
  encoding: string;
  url: string;
  content: string;
  'node_id': string;
}

export class ArticleList {
  name: string;
  title: string;
  lock: boolean;
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


export class Comments {
  'created_at': number;
  user: string;
  body: string;
  url: string;
  'noed_id': string;
  'html_url': string;
}


