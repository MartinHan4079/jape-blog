import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './core/index/index.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ArchivesComponent } from './core/archives/archives.component';
import { AboutComponent } from './core/about/about.component';
import { PostDetailComponent } from './core/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'archives', component: ArchivesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'article/:name', component: PostDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
