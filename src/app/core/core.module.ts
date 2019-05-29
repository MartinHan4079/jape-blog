import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';
import { ClassifyComponent } from './classify/classify.component';
import { LabelComponent } from './label/label.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [
    IndexComponent,
    ClassifyComponent,
    LabelComponent,
    AboutComponent,
    PageNotFoundComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IndexComponent,
    ClassifyComponent,
    LabelComponent,
    AboutComponent,
    PageNotFoundComponent,
    PostDetailComponent
  ]
})
export class CoreModule { }
