import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeletal',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="skeleton p-0 m-0">
            <div class="skeleton_list_section" [ngStyle]="{ rowGap: rowGap + 'px' }">
              <ng-container *ngFor="let row of this.getTotalRows();">
                 <div class="line skeleton_list_section" [ngClass]="{'border_radius_6':borderRadiusEnabled}" [ngStyle]="{ height: rowheight + 'px' }"></div>
              </ng-container>
            </div>
          </div>
  `,
  styleUrl: './skeletal.component.scss'
})
export class SkeletalComponent {
  @Input() rows: number = 5;
  @Input() rowheight: number = 45
  @Input() rowGap: number = 8;
  @Input() borderRadiusEnabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  getTotalRows(): number[] {
    return Array.from({ length: this.rows }, (_, i) => i);
  }
}
