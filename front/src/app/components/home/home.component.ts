import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chatservice/chat.service';
import { GameService } from 'src/app/services/gameservice/game.service';
import { v4 } from 'uuid'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  user:string=""
  side:string=""
  time:string=""

  constructor(private router:Router,private gameservice:GameService,private chatservice:ChatService){}

  

  createGame():void{

    //get user input
    //check form fields are all filled

    //generate new game id
    let gameId=v4()
    //console.log(gameId,"gamecode")
    
    //send gameinfo to game service

    this.gameservice.setUser(this.user)
    this.gameservice.setSide(this.side)
    this.gameservice.setTime(this.time)

    

    //create new room in server
    this.chatservice.createGame({room:gameId,client:this.user})

    this.router.navigate(['game/'+gameId])
    


  }

}
