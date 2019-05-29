import { Component, OnInit } from '@angular/core';
import { ClassifyService, Classification } from './classify.service';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.sass']
})
export class ClassifyComponent implements OnInit {

  classifies: Classification;

  constructor(private classify: ClassifyService) { }

  ngOnInit() {
    this.getClassifies();
  }

  getClassifies() {
    this.classify.getClassify()
      .subscribe(classify => this.classifies = classify);
  }

}
