import { Component ,OnInit,Input} from '@angular/core';
import { Square } from '../square/Square';
import { BoardService } from 'src/app/services/boardservice/board.service';
import { ChatService } from 'src/app/services/chatservice/chat.service';




@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Square[][] = [];
  @Input() room:string=""
  @Input() side:string=""

  ngOnInit(): void {
    this.boardservice.initGame(this.side)
    this.chatservice.onMoveMade().subscribe((move)=>{
      console.log("move made",move)
      this.boardservice.receiveMove(move)
    })
    
  }
  
  takeBack():void{
    this.boardservice.takeBack()
    console.log("take back")
      
  }

 

  makeMove(i:number,j:number):void{
   
      let moveInfo=this.boardservice.clickPiece(i,j)
      if(Object.keys(moveInfo).length){
        console.log(moveInfo,"davabdab")
        this.chatservice.makeMove(moveInfo,this.room)
      }
    

   
    /* this.chatservice.makeMove({from:}) */
  }

  

  constructor(private boardservice:BoardService,private chatservice:ChatService) {
    this.board=this.boardservice.getBoard()
  }

  
    
}
