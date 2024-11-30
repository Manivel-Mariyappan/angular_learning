import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { genderOptions, states, sampleDbValue } from '../../constants/form-constant';

@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formbuilder.component.html',
})
export class FormbuilderComponent {

  genderOptions = genderOptions;
  states = states;
  sampleDbValue = { ...sampleDbValue };
  private formBuilder = inject(FormBuilder);

  userForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
    address: ['', [Validators.required]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    hobbies: ['', Validators.required],
    skills: this.formBuilder.array([this.createSkillsControls()]),
  })

  ngOnInit() {
    setTimeout(() => {
      this.userForm.patchValue({ ...sampleDbValue });
      sampleDbValue.skills.forEach((skill) => {
        this.getSkills.push(this.formBuilder.group({
          name: [skill.name, Validators.required],
          description: [skill.description]
        }));
      })
    }, 2000);
  }

  createSkillsControls() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    })
  }

  get getSkills() {
    return this.userForm.get('skills') as FormArray;
  }

  addNewSkills() {
    this.getSkills.push(this.createSkillsControls());
  }

  userFormSubmit(userForm: FormGroup) {
    console.log(userForm);
    if (userForm.valid) {

    }
    else {
      userForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.userForm.reset();
  }


}
