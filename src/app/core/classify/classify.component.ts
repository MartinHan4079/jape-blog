import { Component, OnInit } from '@angular/core';

import { JapeCoreService, Classification, Issues } from '../jape-core.service';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.sass']
})
export class ClassifyComponent implements OnInit {

  classifyList: Classification[];
  postList: Issues[];

  constructor(private japeCore: JapeCoreService) { }

  ngOnInit() {
    this.getClassification();
  }

  getClassification() {
    this.japeCore.getClassification()
      .subscribe(classify => this.classifyList = classify);
  }


  getPostList(title): void {
    this.japeCore.getClassifyPostList(title)
      .subscribe(post => this.postList = post);
  }

}
