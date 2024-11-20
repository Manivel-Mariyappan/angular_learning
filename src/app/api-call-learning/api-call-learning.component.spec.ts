import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallLearningComponent } from './api-call-learning.component';

describe('ApiCallLearningComponent', () => {
  let component: ApiCallLearningComponent;
  let fixture: ComponentFixture<ApiCallLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCallLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCallLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
