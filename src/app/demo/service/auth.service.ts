import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataSource, Register } from "../models";
import { environment } from "src/environments/environment";
import { Observable, catchError, map, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    baseUrl = environment.baseUrl;
    path = 'api/v1/authorization';
    private tokenKey = 'authToken';
    constructor(private http: HttpClient) { }
    login(email: string, password: string): Observable<boolean> {
        return this.http
          .post<{ token: string }>(`${this.baseUrl}/${this.path}/login`, { email, password })
          .pipe(
            tap((response) => {
              localStorage.setItem(this.tokenKey, response.token); // Store the token
            }),
            map(() => true), // Login successful
            catchError(() => of(false)) // Login failed
          );
      }
    register(model: Register): Observable<DataSource<Register>> {
        return this.http.post<DataSource<Register>>(this.baseUrl + this.path + "/registration", model).pipe(a => a);
    }
    isLoggedIn(): boolean {
        const token = localStorage.getItem(this.tokenKey);
        console.log(token);
        if (!token) {
          return false; // No token means not logged in
        }
        return true;
        // return this.http
        //   .get<{ authenticated: boolean }>(`${this.baseUrl}/${this.path}/auth-status`, {
        //     headers: { Authorization: `Bearer ${token}` },
        //   })
        //   .pipe(
        //     map((response) => response.authenticated), // User is authenticated
        //     catchError(() => of(false)) // Error means not authenticated
        //   );
      }
}