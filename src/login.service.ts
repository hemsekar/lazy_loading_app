import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  userLoginDetails(loginDetails:any){
    const url='http://localhost:3000/users/login';
   return this.http.post(url,loginDetails)
  }

  userRegistertationDetails(userDetails:any){
    const url="http://localhost:3000/users/registerUser"
    return this.http.post(url,userDetails)
  } 
  
  getUserDetails(){
    const url = 'http://localhost:3000/users'
      return this.http.get(url)
  }
  

  updateDetails(formValue:any){
    const url='http://localhost:3000/users/'+formValue.id;
    return this.http.put(url, formValue)
  }
}
