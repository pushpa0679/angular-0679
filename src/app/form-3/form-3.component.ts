import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContactRequest, PersonalData } from '../models/contact-request';

@Component({
  selector: 'app-form-3',
  templateUrl: './form-3.component.html',
})
export class Form3Component implements OnInit {
  contactForm: FormGroup;

  countries = ['USA', 'Germany', 'Italy', 'France'];

  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroup();
  }

  // Step 1
  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl(),
      }),
      requestType: new FormControl(),
      text: new FormControl(),
    });
  }

  // Step 2
  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group({
        email: 'defaul@email.com',
        mobile: '',
        country: '',
      }),
      requestType: '',
      text: '',
    });
  }

  // Step 3
  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group(new PersonalData()),
      requestType: '',
      text: '',
    });
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({
      personalData: new PersonalData(),
      requestType: '',
      text: '',
    });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log(result);
  }

  ngOnInit() {}
}
