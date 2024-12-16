import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnChanges {

  childInputData = input('');
  handleChildChangeEvent = output<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes["childInputData"].currentValue)
  }

  changeInput() {
    debugger;
    this.handleChildChangeEvent.emit('This is text from Child')
  }

}
