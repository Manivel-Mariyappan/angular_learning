import { Component } from '@angular/core';
import { LogoutComponent } from '../../auth/logout/logout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
