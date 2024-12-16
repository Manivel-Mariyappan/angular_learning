import { Component } from '@angular/core';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'app-learning-component',
  standalone: true,
  imports: [MarkdownModule],
  providers: [provideMarkdown()],
  templateUrl: './learning-component.component.html',
  styleUrl: './learning-component.component.scss'
})
export class LearningComponentComponent {

}
