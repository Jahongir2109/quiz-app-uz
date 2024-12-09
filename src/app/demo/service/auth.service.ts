import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataSource, Register } from "../models";
import { environment } from "src/environments/environment";
import { Observable, catchError, map, of, tap } from "rxjs";
import { ApiService } from "./base/api.service";

@Injectable({
  providedIn: "root",
})
export class AuthService extends ApiService {
  path = "api/v1/authorization";
  private tokenKey = "authToken";
  login(email: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({
      "Accept-Language": "uz",
    });
    return this.http
      .post<{ token: string }>(
        `${this.baseUrl}/${this.path}/login`,
        {
          email,
          password,
        },
        { headers }
      )
      .pipe(
        tap((response:any) => {
          this.setToken(response.data[0]) // Store the token
        }),
        map(() => true), // Login successful
        catchError(() => of(false)) // Login failed
      );
  }
  register(model: Register): Observable<DataSource<Register>> {
    console.log(model);
    return this.http
      .post<DataSource<Register>>(
        `${this.baseUrl}/${this.path}/registration`,
        model
      )
      .pipe((a) => a);
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey) as string;
    if (!token || token == "undefined") {
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
  verifyEmail(email: string): Observable<boolean> {
    const headers = new HttpHeaders({
      "Accept-Language": "uz",
    });
    return this.http
      .get<{ token: string }>(
        `${this.baseUrl}/${this.path}/registration/resend/${email}`,
        { headers }
      )
      .pipe(
        map(() => true), // Login successful
        catchError(() => of(false)) // Login failed
      );
  }
  setToken(response) {
    localStorage.setItem(this.tokenKey, response?.jwt);
  }
}
