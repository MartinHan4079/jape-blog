import { Injectable } from '@angular/core';
import { HttpResponse, HttpRequest } from '@angular/common/http';
import { MessageService } from '../shared/messages/message.service';


export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}

const MAXAGE = 30000;

@Injectable({
  providedIn: 'root'
})
export class RequestCacheService implements RequestCache {

  cache = new Map<string, RequestCacheEntry>();

  constructor(private message: MessageService) { }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - MAXAGE);
    const expired = isExpired ? 'expired ' : '';
    this.message.add(
      `Found ${expired}cached response for "${url}".`);
    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    this.message.add(`Caching response from "${url}"`);

    const entry = { url, response, lastRead: Date.now() };

    this.cache.set(url, entry);

    const expired = Date.now() - MAXAGE;
    this.cache.forEach(item => {
      if (item.lastRead < expired) {
        this.cache.delete(item.url);
      }
    });

    this.message.add(`Request cache size: ${this.cache.size}.`);
  }
}
