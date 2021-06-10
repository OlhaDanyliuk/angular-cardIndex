import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class TokensService {
  private accessTokenKey: string = 'tokenKey';
  private tokenUsernameKey: string ='userName';
  private tokenEmailKey: string ='email';

  constructor(private http: HttpClient, private router: Router) {
    
  }

  public login(email: string, password: string): Observable<Token> {
    return this.http
      .post<Token>(environment.apiUrl +'/users/login', {
        email,
        password
      })
      .pipe(
        tap(data=>{
          var _token=data.toString();
          localStorage.setItem(this.accessTokenKey, _token);
          var username=this.parseUserName(_token);
          localStorage.setItem(this.tokenUsernameKey, username);
          var email=this.parseEmail(_token);
          localStorage.setItem(this.tokenEmailKey, email);

        }))
  }

  public register(
    email: string,
    username: string,
    password: string,
    confirmPassword: string
  ): Observable<Token> {
    return this.http
      .post<Token>(environment.apiUrl + '/users/signup', {
        email,
        username,
        password,
        confirmPassword
      })
      .pipe(
        tap(token => {
          var _token=token.toString();
          this.tokenUsernameKey= this.parseUserName(_token)
          this.tokenEmailKey= this.parseEmail(_token)
          localStorage.setItem(this.accessTokenKey, token.toString());
        })
      );
  }
 

  public isEmailUsed(email: string) {
    return this.http.get(environment.apiUrl + '/account/email/' + email);
  }

  public isUsernameUsed(username: string) {
    return this.http.get(environment.apiUrl + '/account/username/' + username);
  }

  public isAuthenticated(): boolean {
    var token = localStorage.getItem(this.accessTokenKey);
    return token && !this.isTokenExpired();
  }

  public getToken(): string {
    return localStorage.getItem(this.accessTokenKey);
  }

  public logout(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.tokenEmailKey);
    localStorage.removeItem(this.tokenUsernameKey);
    this.router.navigate(['/login']);
  }

  public getUsername(): string {
    const token = localStorage.getItem(this.accessTokenKey);
    return this.parseUserName(token);
  }

  public getEmail(): string {
    const token = localStorage.getItem(this.accessTokenKey);
    return this.parseEmail(token);
  }

  private isTokenExpired(): boolean {
    const token = localStorage.getItem(this.accessTokenKey);
    const tokenExpiration: number = this.parseExpirationDate(token) / 1000;
    return new Date().getTime() < tokenExpiration;
  }

  private parseExpirationDate(tokenPayload: string): number {
    if (tokenPayload) {
      try {
        const tokenSplit = tokenPayload.split('.');
        const decodedToken = window.atob(tokenSplit[1]);

        const exp: string = JSON.parse(decodedToken).exp;
        return parseInt(exp, 10);
      } catch {}
    }
    return 0;
  }

  public parseUserName(tokenPayload: string): string {
    if (tokenPayload) {
      try {
        const tokenSplit = tokenPayload.split('.');
        const decodedToken = window.atob(tokenSplit[1]);
        return JSON.parse(decodedToken).sub;
      } catch {}
    }
    return null;
  }
  public parseUserRole(tokenPayload: string): string {
    if (tokenPayload) {
      try {
        const tokenSplit = tokenPayload.split('.');
        const decodedToken = window.atob(tokenSplit[1]);

        return JSON.parse(decodedToken).role;
      } catch {}
    }
    return null;
  }

  private parseEmail(tokenPayload: string): string {
    if (tokenPayload) {
      try {
        const tokenSplit = tokenPayload.split('.');
        const decodedToken = window.atob(tokenSplit[1]);

        return JSON.parse(decodedToken).email;
      } catch {}
    }
    return null;
  }
}
