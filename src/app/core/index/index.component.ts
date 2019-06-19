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
        const mid = element.name.split('-');
        element.year = mid[0];
        element.month = mid[1];
        element.day = mid[2];
        element.title = mid[4].replace(/.md/, '');
        element.lock = (mid[4] && mid[4].replace(/.md/, '') === 'lock') ? true : false;
      });
      const listMid = list.filter(ele => ele.lock === false);
      this.articleList = listMid;
      this.japeCore.setArticleList(listMid);
      this.monthList = this.japeCore.getMonth(listMid);
    });
  }
}

