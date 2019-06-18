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
    const name = this.route.snapshot.paramMap.get('name');
    this.japeCore.getPostDetail(name)
      .subscribe(article => {
        article.year = article.name.split('_')[0];
        article.month = article.name.split('_')[1];
        article.day = article.name.split('_')[2];
        article.title = article.name.split('_')[3].replace(/.md/, '');
        this.article = article;
        this.content = marked(decodeURIComponent(escape(window.atob(article.content))));
      });
  }
}
