import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  router = inject(Router)

  logout = () => {
    localStorage.removeItem('auth');
    this.router.navigate(['login']);
  }

}
