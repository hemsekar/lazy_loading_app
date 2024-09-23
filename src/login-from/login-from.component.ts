import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-from',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './login-from.component.html',
  styleUrl: './login-from.component.css',
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginFromComponent {
  loginForm!:FormGroup;
constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router){
 
}
ngOnInit(): void {
this.loginForm=this.fb.group({
  username:['',Validators.required],
  password:['',Validators.required]

})
}



userLogin(): void{
  const loginDetails=this.loginForm.value;
  // console.log(userdetails);
  this.loginService.userLoginDetails(loginDetails).subscribe((res:any)=>{
    localStorage.setItem('token',res.token)
    this.loginForm.reset();
    this.router.navigate(['/users'])
  })
  
}
userRegistration(){
  this.router.navigate(['/register'])
}

}
