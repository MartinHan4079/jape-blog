import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClassifyService {

  url = this.auth.getBaseUrl() + '/milestones';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getClassify(): Observable<Classification[]> {
    return this.http.get<Classification[]>(this.url);
  }

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
