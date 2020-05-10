import { Observable } from 'rxjs';

import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.api.url}/Account`;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private httpClient: HttpClient) { }

  isUserAuthenticated(): Observable<boolean> {
    return this.httpClient
      .get<boolean>(`${this.url}/IsAuthenticated`, { withCredentials: true });
  }

  signInWithGoogle() {
    this.document.location.href = `${this.url}/SignInWithGoogle`;
  }

  signInWithFacebook() {
    this.document.location.href = `${this.url}/SignInWithFacebook`;
  }

  logout() {
    this.document.location.href = `${this.url}/logout`;
  }
}
