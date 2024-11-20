import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLearningComponent } from './router-learning.component';

describe('RouterLearningComponent', () => {
  let component: RouterLearningComponent;
  let fixture: ComponentFixture<RouterLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
