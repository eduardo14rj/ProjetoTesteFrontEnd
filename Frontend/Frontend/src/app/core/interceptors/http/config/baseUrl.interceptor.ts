// base-url.interceptor.ts
import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api-base-url.token';

@Injectable()
export class baseUrlInterceptor implements HttpInterceptor {
  constructor(@Inject(API_BASE_URL) private baseUrl: string) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Se a URL não for absoluta, adiciona a base URL
    if (!/^http[s]?:\/\//.test(request.url)) {
      const apiReq = request.clone({
        url: `${this.baseUrl}${request.url}`
      });
      return next.handle(apiReq);
    }
    return next.handle(request);
  }
}
