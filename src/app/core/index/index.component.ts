import { Component, OnInit } from '@angular/core';
import { IndexService, Issues } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  issues: Issues;

  constructor(
    private indexService: IndexService
  ) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.indexService.getIssues().subscribe(issues => this.issues = issues);
  }
}
