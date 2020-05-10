import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {

  }

  signInWithFB(): void {
    this.authService.signInWithFacebook();
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }
}
