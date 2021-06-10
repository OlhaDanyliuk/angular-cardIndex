import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokensService } from '../token/tokens.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: TokensService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authenticationService.getToken();
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authenticationService.getToken()}`
                }
            });
        

        return next.handle(request);
    }
}