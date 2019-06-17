import { Component, OnInit } from '@angular/core';

import { JapeCoreService, ArticleList } from '../jape-core.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.sass']
})
export class ArchivesComponent implements OnInit {

  articleList: ArticleList;

  constructor(private japeCore: JapeCoreService) { }

  ngOnInit() {
    this.getContents();
  }

  getContents() {
    this.japeCore.getContents().subscribe(list => {
      list.forEach(element => {
        element.year = element.name.split('_')[0];
        element.month = element.name.split('_')[1];
        element.day = element.name.split('_')[2];
        element.title = element.name.split('_')[3].replace(/.md/, '');
      });
      this.articleList = list.slice(8);
    });
  }

}
