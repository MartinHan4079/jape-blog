import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { RequestCache, RequestCacheService } from './http/request-cache.service';


import { httpInterceptorProviders } from './http/interceptors/index';
import { HttpErrorHandler } from './http/http-error-handler.service';
import { AuthService } from './http/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    httpInterceptorProviders,
    { provide: RequestCache, useClass: RequestCacheService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
