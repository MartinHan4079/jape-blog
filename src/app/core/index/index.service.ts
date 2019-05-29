import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  url = this.auth.getBaseUrl() + '/issues?labels=blog';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getIssues(): Observable<Issues[]> {
    return this.http.get<Issues[]>(this.url);
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

