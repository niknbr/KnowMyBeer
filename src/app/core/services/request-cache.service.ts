import { Injectable } from "@angular/core";
import { HttpResponse } from "@angular/common/http";

@Injectable()
export class RequestCacheService {
  private cache = new Map<string, [Date, HttpResponse<any>]>();

  get(key): HttpResponse<any> {
    const cachedValue = this.cache.get(key);
    if (!cachedValue) return null;

    const expires = cachedValue[0];
    const httpResponse = cachedValue[1];

    // Don't observe expired keys
    const now = new Date();
    if (expires && expires.getTime() < now.getTime()) {
      this.cache.delete(key);
      return null;
    }

    return httpResponse;
  }

  set(key, value, secondsOfExpiry = null) {
    if (secondsOfExpiry) {
      const expires = new Date();
      expires.setSeconds(expires.getSeconds() + secondsOfExpiry);
      this.cache.set(key, [expires, value]);
    } else {
      this.cache.set(key, [null, value]);
    }
  }
}