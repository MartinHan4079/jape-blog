import { Component, OnInit } from '@angular/core';

import { JapeCoreService, ArticleList } from '../jape-core.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})

export class IndexComponent implements OnInit {

  articleList: Array<ArticleList>;

  monthList: string[];

  constructor(
    private japeCore: JapeCoreService
  ) { }

  ngOnInit() {
    this.getContents();
  }

  onEnter(value: string) {
    this.articleList = this.japeCore.searchPost(value);
    this.monthList = this.japeCore.getMonth(this.articleList);
  }

  getContents() {
    this.japeCore.getContents().subscribe(list => {
      list.forEach(element => {
        element.year = element.name.split('_')[0];
        element.month = element.name.split('_')[1];
        element.day = element.name.split('_')[2];
        element.title = element.name.split('_')[3].replace(/.md/, '');
      });
      this.articleList = list;
      this.japeCore.setArticleList(list);
      this.monthList = this.japeCore.getMonth(list);
    });
  }
}

