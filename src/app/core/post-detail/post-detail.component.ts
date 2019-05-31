import { Component, OnInit } from '@angular/core';
import { JapeCoreService, Issues } from '../jape-core.service';
import { ActivatedRoute } from '@angular/router';

import marked from '../../config/marked';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  issues: Issues;
  article: string;

  constructor(
    private japeCore: JapeCoreService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    this.japeCore.getPostDetail(id)
      .subscribe(issues => {
        this.issues = issues;
        this.article = marked(issues.body);
      });
  }

}
