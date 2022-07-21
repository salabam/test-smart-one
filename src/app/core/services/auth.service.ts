import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "environments/environment";
import { catchError, Observable, of, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

    private readonly api = environment.apiUrl;

    private readonly apiLocalStorageKey = 'API_KEY';
    private readonly apiKey = environment.apiKey;

    constructor(private http: HttpClient, private router: Router) { }

    public isLoggedIn(): Observable<boolean> {
        return of(this.isApiKeyExist());
    }

    public login(login: string, password: string): Observable<any> {
        return of(null).pipe(
            tap(() => {
                this.addApiKeyToLocalStorage();
            }),
            catchError(err => {
                console.error(err);
                this.removeApiKeyFromLocalStorage();
                throw err;
            })
        );
    }

    public redirectToLogin(): Promise<boolean> {
        return this.router.navigate(['/auth/login']);
    }

    private addApiKeyToLocalStorage(): void {
        localStorage.setItem(this.apiLocalStorageKey, this.apiKey);
    }

    private removeApiKeyFromLocalStorage(): void {
        localStorage.removeItem(this.apiLocalStorageKey);
    }

    private isApiKeyExist(): boolean {
        return !!localStorage.getItem(this.apiLocalStorageKey);
    }

}