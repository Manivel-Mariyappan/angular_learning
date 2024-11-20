import { Component } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';

@Component({
  selector: 'app-api-call-learning',
  standalone: true,
  imports: [PhotosComponent],
  templateUrl: './api-call-learning.component.html',
  styleUrl: './api-call-learning.component.scss',
})
export class ApiCallLearningComponent {

}
