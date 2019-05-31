import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  issuesUrl = this.auth.getBaseUrl() + '/issues?labels=blog';
  classifyUrl = this.auth.getBaseUrl() + '/milestones';
  labelUrl = this.auth.getBaseUrl() + '/labels';
  aboutUrl = this.auth.getBaseUrl() + '/issues/9';

  getIssues(): Observable<Issues[]> {
    return this.http.get<Issues[]>(this.issuesUrl);
  }

  getLabels(): Observable<Label[]> {
    return this.http.get<Label[]>(this.labelUrl);
  }

  getClassification(): Observable<Classification[]> {
    return this.http.get<Classification[]>(this.classifyUrl);
  }

  getAbout(): Observable<About> {
    return this.http.get<About>(this.aboutUrl);
  }

  getPostDetail(id: string): Observable<Issues> {
    const url = this.auth.getBaseUrl() + '/issues/' + id;
    return this.http.get<Issues>(url);
  }

  getLabelPostList(name: string): Observable<Issues[]> {
    const url = this.auth.getBaseUrl() + '/issues?labels=' + name;
    return this.http.get<Issues[]>(url);
  }

  getClassifyPostList(id: string): Observable<Issues[]> {
    const url = this.auth.getBaseUrl() + '/issues?milestone=' + id;
    return this.http.get<Issues[]>(url);
  }


}

export class Label {
  id: string;
  color: string;
  default: string;
  name: string;
  url: string;
  'node_id': string;
}

export class Issues {
  id: string;
  title: string;
  url: string;
  'updated_at': string;
  assignee: string;
  body: string;
  comments: string;
  labels: object;
  milestone: string;
  'node_id': string;
  number: string;
  state: string;
}

export class Classification {
  id: string;
  title: string;
  'node_id': string;
  number: number;
  'open_issues': number;
  state: string;
  'updated_at': string;
  creator: object;
}

export class About {
  id: string;
  title: string;
  url: string;
  'updated_at': string;
  assignee: string;
  body: string;
  comments: string;
  labels: object;
  milestone: string;
  'node_id': string;
  number: string;
  state: string;
}


