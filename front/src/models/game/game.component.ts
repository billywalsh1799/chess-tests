import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chatservice/chat.service';
import { GameService } from 'src/app/services/gameservice/game.service';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  user:string=""
  otherUser:string=""
  gameId:any=""
  gameSettings={}
  ready:any=false

  /* messages:any =[] */
 
  //angular material spinner waiting for other players
  constructor(private gameservice:GameService,private chatservice:ChatService,private route:ActivatedRoute){
    let {user,side,time}=gameservice.getGameInfo()
    this.user=user
    this.gameSettings={side,time}
    this.gameId=this.route.snapshot.paramMap.get('gameId')

  }

  ngOnInit(): void {

    

    this.chatservice.onStartGame().subscribe((ready)=>{
      console.log("yoooo",ready)
      let {start,opponent}=ready
      this.ready=start
      this.otherUser=opponent
    })
    
    console.log(this.gameId,"game id")
    /* this.chatservice.getMessages().subscribe((message)=>{
      this.messages.push(message)
    }) */
    
    //should you make service suscription in constructor or oninit 

  }

  joinGame():void{
    this.chatservice.joinGame({room:this.gameId,client:this.user})

  }

  /* sendMessage(msg:HTMLInputElement):void{
    let message={sender:this.user,content:msg.value}
    this.messages.push(message)
    msg.value=""
    this.chatservice.sendMessage(message,this.gameId)
  } */

}