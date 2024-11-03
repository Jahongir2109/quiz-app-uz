import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataSource, Register } from "../models";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    baseUrl = environment.baseUrl;
    path = 'api/v1/authorization'
    constructor(private http: HttpClient) { }

    login(model: Register): Observable<DataSource<Register>> {
        return this.http.post<DataSource<Register>>(this.baseUrl + this.path + "/login", model).pipe(a => a);
    }
    register(model: Register): Observable<DataSource<Register>> {
        return this.http.post<DataSource<Register>>(this.baseUrl + this.path + "/registration", model).pipe(a => a);
    }
}