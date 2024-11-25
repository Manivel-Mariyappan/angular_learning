import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './simple-reactive-form.component.html',
})
export class SimpleReactiveFormComponent {

  //https://angular.dev/api/forms/Validators
  firstName = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('^[A-Za-z\s]+$')]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('^[A-Za-z\s]+$')]);
  email = new FormControl('', [Validators.required, Validators.email]);

  submitForm() {
    console.log(this.firstName);
    console.log(this.email);
    if (this.firstName.valid && this.lastName.valid && this.email.valid) {
      console.log('form is valid');
    }
    else {
      console.log('form is invalid');
      this.firstName.markAsTouched();
      this.lastName.markAsTouched();
      this.email.markAsTouched();
    }

  }
}
