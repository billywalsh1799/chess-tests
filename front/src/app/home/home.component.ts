import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
import { UsernameService } from '../services/username.service';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  
  constructor(private router:Router,private usernameservice:UsernameService,private chatservice:ChatService){}

  

  createUser(userInput:any){

    //get user input
    let user=userInput.value

    //generate new game id
    let gameId=uuid.v4()

    //send gameinfo to username service
    this.usernameservice.setUserName(user)
    
    //create new room in server
    this.chatservice.createGame({room:gameId,client:user})

    this.router.navigate(['game/'+gameId])
    


  }

}
