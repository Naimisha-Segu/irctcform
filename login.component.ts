import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginform = this.fb.group({
   username: new FormControl('',Validators.compose([Validators.required, this.customValidator.uservalidator()])),
  pass: new FormControl('', Validators.compose([Validators.required, this.customValidator.patternValidator()])),
  cpass:new FormControl('', [Validators.required]),
  sel:new FormControl('',Validators.required),
  selct:new FormControl('',Validators.required),
  secans:new FormControl('',Validators.compose([Validators.required, this.customValidator.securityvalidator()])),
    }
    );
    submitted = false;
  constructor(private fb: FormBuilder,private customValidator: CustomvalidationService) { }

  get registerFormControl() {
    return this.loginform.controls;
  }
  get registerFormContro() {
    return this.loginform.controls;
  }
  onSec(){
    console.log(this.loginform.value);
  }
  onSubmit(){
    this.submitted = true;
    if (this.loginform.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.log(this.loginform.value);
  }
}

  updateProfile(){
    this.loginform.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  // get name() { return this.loginform.get('firstName'); }
  get addField() {
    return this.loginform.get('aliases') as FormArray;
  }
  addAlias() {
    this.addField.push(this.fb.control(''));
  }

}
