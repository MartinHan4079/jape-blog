import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpHeaders, HttpEvent } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

import {  AuthService } from '../auth.service';
import {  RequestCache } from '../request-cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(
    private cache: RequestCache) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!isCachable(req)) {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req);

    if (req.headers.get('x-refresh')) {
      const results$ = sendRequest(req, next, this.cache);
      return cachedResponse ?
        results$.pipe( startWith(cachedResponse) ) : results$;
    }
    return cachedResponse ? of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}


const auth = new AuthService();
function isCachable(req: HttpRequest<any>) {
  return req.method === 'GET' &&
    -1 < req.url.indexOf(auth.getBaseUrl());
}

function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCache): Observable<HttpEvent<any>> {

  // No headers allowed in npm search request
  const noHeaderReq = req.clone({ headers: new HttpHeaders() });

  return next.handle(noHeaderReq).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.put(req, event); // Update the cache.
      }
    })
  );
}
