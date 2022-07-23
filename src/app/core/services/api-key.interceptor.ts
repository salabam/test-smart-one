import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.isLoggedIn().pipe(
            switchMap(isLoggedIn => {
                const isApiUrl = request.url.startsWith(environment.apiUrl);
                if (isLoggedIn && isApiUrl) {
                    request = request.clone({
                        setHeaders: { 'X-Api-Key': this.authService.getApiKey() }
                    });
                }
                return next.handle(request);
            })
        );
    }
}