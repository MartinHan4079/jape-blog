import { Component, OnInit } from '@angular/core';

import { JapeCoreService, Label, Issues } from '../jape-core.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.sass']
})
export class LabelComponent implements OnInit {

  labels: Label[];
  postList: Issues[];

  constructor(private japeCore: JapeCoreService) { }

  ngOnInit() {
    this.getLabels();
  }

  getLabels() {
    this.japeCore.getLabels()
      .subscribe(label => this.labels = label);
  }

  getPostList(name): void {
    this.japeCore.getLabelPostList(name)
      .subscribe(post => this.postList = post);
  }

}
