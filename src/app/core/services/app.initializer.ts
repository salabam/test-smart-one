import { Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";

export function initializeAppFactory(authService: AuthService): () => Observable<boolean> {
    return () => authService.isLoggedIn().pipe(
        tap(isLoggedIn => {
            if (!isLoggedIn) {
                authService.redirectToLogin();
            }
        })
    );
}