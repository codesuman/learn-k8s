import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpInterceptorService implements HttpInterceptor{

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the JWT token from localStorage
    const token = this.tokenService.getToken();

    // Clone the request and add the Authorization header if the token is present
    const authReq = token ? req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    }) : req;

    // Handle the request and the response
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle 403 Forbidden error
        if (error.status === 403) {
          const errMsg = "You don't have enough rights to access this page";
          return throwError(() => new Error(errMsg));
        }
        
        // Pass the error to the caller
        return throwError(() => error);
      })
    );
  }
}
