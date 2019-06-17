import { Component, OnInit } from '@angular/core';

import { JapeCoreService } from '../jape-core.service';

import marked from '../../config/marked';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  post = '';

  constructor(private japeCore: JapeCoreService) { }

  ngOnInit() {
  }


}
