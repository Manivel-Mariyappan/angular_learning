import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent-child-communication',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent-child-communication.component.html',
})
export class ParentChildCommunicationComponent {

  dataToChild = 'This is child input';

  changeInput() {
    this.dataToChild = "Input text changed";
  }

  getValueFromChild(value: string) {
    this.dataToChild = value;
  }
}
