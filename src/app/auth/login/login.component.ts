import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hidePwdContent: boolean = true;
loginForm: FormGroup;

constructor(fb: FormBuilder) {
  this.loginForm = fb.group({
    email: fb.control('', [Validators.required]),
    password: fb.control('', [Validators.required]),
  })
} 
login() {
  let loginInfo = {
    email: this.loginForm.get('email')?.value,
    password: this.loginForm.get('password')?.value,
  }
}
}
