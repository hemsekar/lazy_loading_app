import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  registrationForm!:FormGroup
  constructor(private fb:FormBuilder, private loginService:LoginService, private router:Router){}
  ngOnInit(){
    this.registrationForm=this.fb.group({
      username:  ['',Validators.required, Validators.minLength(3)],
      email:  ['',Validators.required, Validators.email],
      password:  ['',Validators.required, Validators.minLength(6)],
      confirmPassword: ['', Validators.required]
    })
  }
  userRegister(){
    const userDetails=this.registrationForm.value;
    this.loginService.userRegistertationDetails(userDetails).subscribe((res:any)=>{
      this.registrationForm.reset();
      this.router.navigate(['/login'])
    })

  }
}
