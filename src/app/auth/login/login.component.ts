import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  router = inject(Router)

  ngOnInit() {
    localStorage.removeItem('auth');
  }

  login() {
    localStorage.setItem('auth', 'loggedin');
    this.router.navigate(['/dashboard'])
  }

}
