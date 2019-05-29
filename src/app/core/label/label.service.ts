import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../../http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  url = this.auth.getBaseUrl() + '/labels';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getLabels(): Observable<Label[]> {
    return this.http.get<Label[]>(this.url);
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
