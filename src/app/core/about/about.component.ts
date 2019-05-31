import { Component, OnInit } from '@angular/core';

import { JapeCoreService, About } from '../jape-core.service';

import marked from '../../config/marked';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  about: About;
  post: string;

  constructor(private japeCore: JapeCoreService) { }

  ngOnInit() {
    this.getAboutPost();
  }

  getAboutPost(): void {
    this.japeCore.getAbout()
    .subscribe(about => {
      this.about = about;
      this.post = marked(about.body);
    });
  }
}
