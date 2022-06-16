// import { AbstractControl, ValidatorFn } from '@angular/forms';

// export default class Validation {
//   static match(controlName: string, checkControlName: string): ValidatorFn {
//     return (controls: AbstractControl) => {
//       const control = controls.get(controlName);
//       const checkControl = controls.get(checkControlName);

//       if (checkControl.errors && !checkControl.errors.matching) {
//         return null;
//       }

//       if (control.value !== checkControl.value) {
//         controls.get(checkControlName).setErrors({ matching: true });
//         return { matching: true };
//       } else {
//         return null;
//       }
//     };
//   }
// }

// 8888
import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static match(controlName: string, matchingControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const matchingControl = controls.get(matchingControlName);

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return null;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}

// 8888
// import { FormGroup } from '@angular/forms';

// // custom validator to check that two fields match
// export function MustMatch(controlName: string, matchingControlName: string) {
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];

//         if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//             // return if another validator has already found an error on the matchingControl
//             return;
//         }

//         // set error on matchingControl if validation fails
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ mustMatch: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }
