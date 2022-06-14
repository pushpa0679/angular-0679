import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-01',
  templateUrl: './form-01.component.html',
  styleUrls: ['./form-01.component.css'],
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

  get getControl() {
    return this.userForm.controls;
  }
  onSubmit() {
    console.log(this.userForm);
  }
}
