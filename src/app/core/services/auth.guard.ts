import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "@core/services/auth.service";
import { Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.isLoggedIn().pipe(
            tap(isLoggedIn => {
                if (!isLoggedIn) {
                    this.authService.redirectToLogin();
                }
            })
        )
    }
}