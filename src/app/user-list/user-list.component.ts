import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store,select } from '@ngrx/store';
import * as UserActions from '../user-store/user-action';
import { selectUsers } from '../user-store/user.selectors';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users$:any
  constructor(private loginService: LoginService, private fb:FormBuilder,private router:Router,private store:Store) { 
    this.users$ = this.store.select(selectUsers);
    console.log(this.users$);
    
  }
  userDetails: any = []
  updateForm:any;
  users:any;
  ngOnInit() {
    // this.initializeFrom()
    // this.fetchUserDetails()    
    this.store.dispatch(UserActions.loadUsers())
    this.users$ = this.store.pipe(select(selectUsers));
    console.log(this.users$)
    
  }

  // fetchUserDetails() {
  //   this.loginService.getUserDetails().subscribe((res: any) => {
  //     this.userDetails = res;
  //   })
  // }

  editUser(user:any){ 
    // this.users=JSON.stringify(user) 
    // console.log(this.users);
    
    this.router.navigate(['/edituser'], {  queryParams:  {user:JSON.stringify(user) }})    
    
  }

  
  
}
