import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../../http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url = this.auth.getBaseUrl() + '/issues/9';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }


  getAbout(): Observable<About> {
    return this.http.get<About>(this.url);
  }
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
