import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouteMatcherService } from './services/route-matcher.service';

@Injectable()
export class ZenifyHttpInterceptor implements HttpInterceptor {

    constructor(
        private routeMatcher: RouteMatcherService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('user.uid')
            && localStorage.getItem('user.domain')
            && localStorage.getItem('user.id-token')) {

            const clonedRequest = request.clone({
                headers: new HttpHeaders({
                    'X-UID': localStorage.getItem('user.uid'),
                    'X-Domain' : localStorage.getItem('user.domain'),
                    'X-Auth-Token': localStorage.getItem('user.id-token')
                    })
            });
    
            return next.handle(clonedRequest);
        } else if (!localStorage.getItem('user.domain')) {
            const clonedRequest = request.clone({
                headers: new HttpHeaders({
                    'X-Domain' : this.routeMatcher.startsWith('business') ? 'BUSINESS' : 'COMMUNITY'
                    })
            });

            return next.handle(clonedRequest);
        }

        console.debug("Forwarding request. User info not available.");
        return next.handle(request);
    }
}