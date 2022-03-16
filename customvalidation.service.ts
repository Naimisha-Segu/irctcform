import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null as any;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true } as any;
    };
  }
  // MatchPassword(controlName: any,matchingControlName: any) {
  //   return (formGroup: FormGroup) => {
  //     const passwordControl = formGroup.controls[controlName];
  //     const confirmPasswordControl = formGroup.controls[matchingControlName];

  //     if (!passwordControl || !confirmPasswordControl) {
  //       return null;
  //     }

  //     if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
  //       return null;
  //     }

  //     if (passwordControl.value !== confirmPasswordControl.value) {
  //       confirmPasswordControl.setErrors({ passwordMismatch: true });
  //     } else {
  //       confirmPasswordControl.setErrors(null);
  //     }
  //   }
  // }

  uservalidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null as any;
      }
      const regex = new RegExp('^[A-Za-z0-9_-].{3,35}$');
      const valid = regex.test(control.value);
      return valid ? null : { invaliduser: true } as any;
    };
  }
  securityvalidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null as any;
      }
      const regex = new RegExp('^[A-Za-z0-9_-].{3,20}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidsecname: true } as any;
    };
  }

  constructor() { }
}
