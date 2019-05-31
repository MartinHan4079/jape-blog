import { Component, OnInit } from '@angular/core';

import { JapeCoreService, Issues } from '../jape-core.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  issuesList: Issues[];

  constructor(
    private japeCore: JapeCoreService
  ) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.japeCore.getIssues().subscribe(issues => this.issuesList = issues);
  }
}
