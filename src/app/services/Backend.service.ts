import { environment } from './../../environment/environment';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

declare var google: any;
@Injectable({
  providedIn: 'root',
})
export class ReCAPTCHAService {
  public userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  private clientId: string = environment.CLIENT_ID;
  private backendUrl = environment.BACKEND_URL;
  public router=inject(Router)
  constructor(private http: HttpClient) {
    this.initializeGoogleSignIn();
  }
  private initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: (response: any) => this.handleCredentialResponse(response),
    });
  }
  private handleCredentialResponse(response: any) {
    const jwtToken = response.credential;
    console.log('JWT Token from Google:', jwtToken);

    this.verifyGoogleToken(jwtToken);
  }
  verifyGoogleToken(token: string) {
    this.http.post(`${this.backendUrl}/auth/google-verify`, { token }).subscribe(
      (res) => {
        console.log('Verified User:', res);
        this.userSubject.next(res);
      },
      (error) => {
        console.error('Token verification failed:', error);
      }
    );
  }

  verifyRecaptcha(token: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/verify-recaptcha`, { token });
  }

  sendOtp(email: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/send-otp`, { email });
  }

  verifyOtp(email: any, otp: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/verify-otp`, { email, otp });
  }
}
