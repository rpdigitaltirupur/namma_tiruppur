import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = 'Error: ' + error.error.message;
        } else {
          errorMessage =
            'Error Code: ' + error.status + '\nMessage: ' + error.message;
        }
        console.log(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
