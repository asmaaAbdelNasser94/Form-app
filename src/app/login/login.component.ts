import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Regex } from '../core/util/regex';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userForm!: FormGroup;
  submitted: boolean = false;
  userInfo!: User ;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required , Validators.pattern(Regex.ArEnOnly)]],
      lastName: ['', [Validators.pattern(Regex.ArEnOnly)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.pattern(Regex.emailRegex)]]
    })

  }
  get f() {
    return this.userForm.controls;
  }
  submit() {
    if (this.userForm.valid) {
      this.userInfo = {
        "firstName": this.f.firstName.value,
        "lastName": this.f.lastName.value,
        "phone": this.f.phone.value,
        "email": this.f.email.value,
      }
      console.log(this.userInfo)
    }

  }
}
