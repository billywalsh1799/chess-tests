import { Component } from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment'
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  messages:any=[]

  sendMessage(msg:any){
    if(msg.value){
      let newMsg:any={}
      newMsg.text=msg.value
      msg.value=""
      let time=moment().format('h:mm a')
      newMsg.time=time
      console.log(time)
      this.messages.push(newMsg)
    }

  }

  handleKeyUp(e:any,msg:any){
    if(e.keyCode === 13)
      this.sendMessage(msg)
     

  }




}
