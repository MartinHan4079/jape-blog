import { Component, OnInit } from '@angular/core';
import { AboutService, About } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  about: About;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getAboutPost();
  }

  getAboutPost(): void {
    this.aboutService.getAbout()
      .subscribe(about => this.about = about);
  }

}
