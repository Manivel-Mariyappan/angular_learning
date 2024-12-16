import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { components } from '../../constant/component-constant';


@Component({
  selector: 'app-learning-component',
  standalone: true,
  imports: [RouterModule],
  providers: [],
  templateUrl: './learning-component.component.html',
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
export class LearningComponentComponent {
  components = components;
}
