import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';
import { ArchivesComponent } from './archives/archives.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

@NgModule({
  declarations: [
    IndexComponent,
    ArchivesComponent,
    AboutComponent,
    SanitizeHtmlPipe,
    PageNotFoundComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    IndexComponent,
    ArchivesComponent,
    AboutComponent,
    PageNotFoundComponent,
    PostDetailComponent,
  ]
})
export class CoreModule { }
