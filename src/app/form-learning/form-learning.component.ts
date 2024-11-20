import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form-learning',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet, RouterLinkActive],
  templateUrl: './form-learning.component.html',
  styleUrl: './form-learning.component.scss'
})
export class FormLearningComponent {

}
