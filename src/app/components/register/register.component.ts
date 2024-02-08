import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corregir styleUrl a styleUrls
})
export class RegisterComponent {

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]], 
    password:['',[Validators.required]],
    fullname:['',[Validators.required]],
    confirmPass:['',[Validators.required]]
  })
  constructor(private fb: FormBuilder){

  }
  get email(){
    return this.loginForm.controls['email']
  }
  get password(){
    return this.loginForm.controls['password']
  }

  get fullname(){
    return this.loginForm.controls['fullname']
  }

  get confirmPass(){
    return this.loginForm.controls['confirmPass']
  }

}
