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

  player:string=""
  opponent:string=""
  gameId:any=""
  side:string=""
  time:number=0
  isCreator:boolean=false
  roomException:string=""

  //add attribute is creator if usergameservice is empty string
  //rename user player other user opponent

  ready:any=false

 
  //angular material spinner waiting for other players
  constructor(private gameservice:GameService,private chatservice:ChatService,private route:ActivatedRoute){
    if(gameservice.getUser()){
      this.player=gameservice.getUser()
      this.side=gameservice.getSide()
      this.time=gameservice.getTime()
      this.isCreator=true
    }
    this.gameId=this.route.snapshot.paramMap.get('gameId')

  }

  ngOnInit(): void {

    this.chatservice.onStartGame().subscribe((ready)=>{
      let {start,opponent,gameSettings}=ready
      this.ready=start
      this.opponent=opponent
      if(!this.isCreator){
        let {side,time}=gameSettings
        this.side=side==="white"? "black" : "white"
        this.time=time
      }
    
    })

    this.chatservice.onRoomException().subscribe((exception=>{
      /* alert(exception["exception"]) */
      this.roomException=exception["exception"]
    }))
  }

  

  joinGame():void{
    if(this.player)
      this.chatservice.joinGame({room:this.gameId,client:this.player})
    //alert for form fields if not filledkkk

  }



}