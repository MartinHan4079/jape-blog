import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  issuesUrl = this.auth.getBaseUrl() + '/issues';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getIssues(): Observable<Issues> {
    return this.http.get<Issues>(this.issuesUrl);
  }
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

