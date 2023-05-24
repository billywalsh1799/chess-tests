import { Component,Input,OnInit,Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { ChatService } from 'src/app/services/chatservice/chat.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  

  @Input() sender:string=""
  @Input() receiver: string=""
  @Input() roomCode:string=""

  @Output() inGameOption: EventEmitter<{opponent:string,type:string}>= new EventEmitter<{opponent:string,type:string}>

  messages:any =[]

  /* @Input() messages:any=[{text:"where are you going now billy fucking walsh vinny chase ari gold turtle johnny",time:"9:12pm"}] */

  constructor(private chatservice: ChatService,private dialog: MatDialog){}

  ngOnInit(): void {
    this.chatservice.getMessages().subscribe((message)=>{
      this.messages.push(message)
    })

    this.chatservice.onInGameOption().subscribe((option)=>{
      this.openDialog(option)
      this.inGameOption.emit(option)
    })

  }

  sendOption(type:string):void{
    let option={opponent:this.sender,type:type}
    this.chatservice.inGameOption(option,this.roomCode)

  }

  openDialog(option:any): void {
    let dialogRef=this.dialog.open(DialogComponent,{data:option})
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      alert(result)
    });
  }

  
  sendMessage(msg:HTMLInputElement):void{
    if(msg.value){
      let message={sender:this.sender,content:msg.value,time:moment().format('h:mm a')}
      this.messages.push(message)
      msg.value=""
      this.chatservice.sendMessage(message,this.roomCode)
    }
  }

  handleKeyUp(e:any,msg:HTMLInputElement){
    if(e.keyCode === 13)
      this.sendMessage(msg)
     

  }

}
