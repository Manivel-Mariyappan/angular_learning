import { Component } from '@angular/core';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';


@Component({
  selector: 'app-component-doc',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './component-doc.component.html',
  providers: [provideMarkdown()]
})
export class ComponentDocComponent {

}
