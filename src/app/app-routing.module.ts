import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './core/index/index.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ClassifyComponent } from './core/classify/classify.component';
import { LabelComponent } from './core/label/label.component';
import { AboutComponent } from './core/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'classify',
    component: ClassifyComponent,
  },
  {
    path: 'label',
    component: LabelComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'post/:id',
    component: AboutComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
