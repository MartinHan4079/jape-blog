import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  label: Array<string>;
  locationUrl: string;

  content = '';

  constructor(
    private japeCore: JapeCoreService,
    private route: ActivatedRoute,
    public location: Location
    ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const regs = /\<h3([\S\s]*?)\>([\S\s\t]*?)\<\/h3\>|\<h4([\S\s]*?)\>([\S\s\t]*?)\<\/h4\>/igm;
    const sha = this.route.snapshot.paramMap.get('sha');
    this.locationUrl = this.location.path();
    this.japeCore.getPostDetail(sha)
      .subscribe(article => {
        this.content = marked(decodeURIComponent(escape(window.atob(article.content))));
        const list = this.content.match(regs);
        const label = [];
        if (list) {
          list.forEach(ele => {
            label.push(ele.match(/\"([\S\s]*?)\"/ig)[0].replace(/"/g, ''));
          });
        }
        this.label = label;
      });
  }
}
