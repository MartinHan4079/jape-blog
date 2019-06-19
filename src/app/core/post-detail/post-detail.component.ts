import { Component, OnInit } from '@angular/core';
import { JapeCoreService, Article } from '../jape-core.service';
import { ActivatedRoute } from '@angular/router';

import marked from '../../config/marked';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  article: Article;

  content = '';

  constructor(
    private japeCore: JapeCoreService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const sha = this.route.snapshot.paramMap.get('sha');
    this.japeCore.getPostDetail(sha)
      .subscribe(article => {
        this.content = marked(decodeURIComponent(escape(window.atob(article.content))));
      });
  }
}
