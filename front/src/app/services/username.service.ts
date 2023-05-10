import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  userName:string=""
  
  constructor() { }

  getUserName(){
    return this.userName
  }

  setUserName(user:string){
    this.userName=user
  }

  

 
}
