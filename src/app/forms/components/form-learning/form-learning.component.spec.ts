import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLearningComponent } from './form-learning.component';

describe('FormLearningComponent', () => {
  let component: FormLearningComponent;
  let fixture: ComponentFixture<FormLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
