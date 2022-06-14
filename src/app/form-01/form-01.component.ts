import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-01',
  templateUrl: './form-01.component.html',
})
export class Form01Component implements OnInit {
  userForm: FormGroup;
  constructor(public _fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this._fb.group({
      name: ['', Validators.required, Validators.minLength(4)],
      email: ['', Validators.required],
      phone: ['', Validators.required, Validators.minLength(10)],
      message: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    console.log(this.userForm);
  }
}
