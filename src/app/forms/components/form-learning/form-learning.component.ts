import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { forms } from '../../constants/form-constant';

@Component({
  selector: 'app-form-learning',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet, RouterLinkActive],
  templateUrl: './form-learning.component.html',
  styles: `
        .inner_menu a {
          text-decoration: none;
          color: #111111;
        }
        .inner_menu a.active {
          background: blue;
          padding: 4px;
          border-radius: 4px;
          color: white;
        }
  `
})
export class FormLearningComponent {

  formCategories = [...forms];

}
