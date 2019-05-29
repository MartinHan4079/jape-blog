import { Component, OnInit } from '@angular/core';

import { LabelService, Label } from './label.service';



@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.sass']
})
export class LabelComponent implements OnInit {

  labels: Label;

  constructor(private label: LabelService) { }

  ngOnInit() {
    this.getLabels();
  }

  getLabels() {
    this.label.getLabels()
      .subscribe(label => this.labels = label);
  }

}
