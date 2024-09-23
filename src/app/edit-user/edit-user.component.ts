import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../user-store/user-action';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  updateForm!: FormGroup
  user:any=[]
  userDetails:any;
  constructor(private loginService: LoginService, private fb: FormBuilder,private store:Store, private activateRoute:ActivatedRoute,
    private router:Router
   ) { }

  ngOnInit(){
    this.initializeForm()
    this.activateRoute.queryParams.subscribe((params:any)=>{   
     const user=JSON.parse(params.user);  
    //  console.log(JSON.parse(params.user));
      
      this.userDetails = user;
     console.log('userDetails', this.userDetails)
     this.updateForm.setValue(this.userDetails)
      
    })
   // this.updateForm.setValue(this.userDetails)
    
  }

  initializeForm() {
    this.updateForm = this.fb.group({
      id: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  formUpdate() {
    const formValue = this.updateForm.value;
    // this.store.dispatch(UserActions.loadUsers)
    this.loginService.updateDetails(formValue).subscribe((res: any) => {
      this.router.navigate(['/users'])
      // this.fetchUserDetails()
      //this.updateForm.reset()
    })

  }

}
