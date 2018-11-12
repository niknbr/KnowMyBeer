import { Injectable } from "@angular/core";
import { HttpEvent, HttpResponse } from "@angular/common/http";
import { RequestCacheService } from "../services";
import { Observable, of } from "rxjs";
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";

const SECONDS_OF_EXPIRY = 1800; // Half an hour

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.headers.get('cache-control') == 'no-cache') { return next.handle(req); }

    const cachedResponse = this.cache.get(req.url);
    return cachedResponse
      ? of(cachedResponse)
      : this.sendRequest(req, next);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        this.cache.set(req.url, event, SECONDS_OF_EXPIRY);
      }
    }));
  }
}