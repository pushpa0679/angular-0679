import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match-validator';

@Component({
  selector: 'app-form-2',
  templateUrl: './form-2.component.html',
  styleUrls: ['./form-2.component.css'],
})
export class Form2Component implements OnInit {
  regForm: FormGroup;
  submitted = false;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this._fb.group(
      {
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],

        // validates date format yyyy-mm-dd
        dob: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
            ),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.regForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.regForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS !! :-))\n\n' + JSON.stringify(this.regForm.value, null, 4));
  }

  onReset(): void {
    this.submitted = false;
    this.regForm.reset();
  }
}
