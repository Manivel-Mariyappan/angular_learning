import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { genderOptions, states } from '../../constants/form-constant';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
})
export class TemplateDrivenFormComponent {

  genderOptions = genderOptions;
  states = states;

  userModel = {
    firstName: "",
    lastName: "",
    gender: "male",
    email: "",
    mobile: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    hobbies: "",
    skills: [
      {
        name: '',
        description: ''
      }
    ]
  }

  ngOnInit() {
  }

  saveUserForm(form: NgForm) {
    debugger;
    if (form.valid) {

    }
    else {
      form.control.markAllAsTouched();
    }
  }

  addNewSkil() {
    const skillObject = {
      name: '',
      description: ''
    }
    this.userModel.skills.push(skillObject);
  }

  userFormReset(form: NgForm) {
    form.reset();
  }



}
