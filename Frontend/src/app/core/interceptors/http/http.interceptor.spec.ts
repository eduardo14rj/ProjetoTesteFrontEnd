// base-url.interceptor.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { of } from 'rxjs';

import { API_BASE_URL } from './config/api-base-url.token';
import { baseUrlInterceptor } from './config/baseUrl.interceptor';

describe('BaseUrlInterceptor', () => {
  let interceptor: baseUrlInterceptor;
  const baseUrl = 'https://localhost:7250/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: API_BASE_URL, useValue: baseUrl },
        baseUrlInterceptor,
      ],
    });
    interceptor = TestBed.inject(baseUrlInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should prepend base URL to relative URLs', (done) => {
    const req = new HttpRequest('GET', 'dados');
    const next: HttpHandler = {
      handle: (request: HttpRequest<any>) => {
        expect(request.url).toBe(`${baseUrl}dados`);
        return of<HttpEvent<any>>();
      }
    };

    interceptor.intercept(req, next).subscribe({
      complete: done,
    });
  });

  it('should not modify absolute URLs', (done) => {
    const absoluteUrl = 'https://another.com/data';
    const req = new HttpRequest('GET', absoluteUrl);
    const next: HttpHandler = {
      handle: (request: HttpRequest<any>) => {
        expect(request.url).toBe(absoluteUrl);
        return of<HttpEvent<any>>();
      }
    };

    interceptor.intercept(req, next).subscribe({
      complete: done,
    });
  });
});
