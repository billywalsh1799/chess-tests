import { Component ,OnInit,Input} from '@angular/core';
import { Square } from '../square/Square';
import { BoardService } from 'src/app/services/boardservice/board.service';
import { ChatService } from 'src/app/services/chatservice/chat.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';




@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Square[][] = [];
  @Input() room:string=""
  @Input() side:string=""
  @Input() time:number=0

  finished:string=""

  ngOnInit(): void {
    this.boardservice.initGame(this.side) 
    this.chatservice.onMoveMade().subscribe((move)=>{
      console.log("move made",move)
      let gameFinished=this.boardservice.receiveMove(move)
      if(gameFinished==="white won"){
        this.finished="white won"
        this.openDialog("white won")
      }
      
    })

    this.chatservice.onInGameOption().subscribe((option)=>{
      this.openDialog(option)
    })

    /* this.boardservice.finished.subscribe((x)=>{
      console.log(x,"game finished")
      if(x==="white won")
        alert(x)
    }) */
    
  }
  
  takeBack():void{
    this.boardservice.takeBack()
    console.log("take back")
      
  }

  openDialog(option:any): void {
    let dialogRef=this.dialog.open(DialogComponent,{data:option})
    dialogRef.afterClosed().subscribe(result => {
      
      alert(result) 
      console.log(result,"result")
    });
  }

  sendOption(type:string):void{
    let option={opponent:this.side,type:type}
    this.chatservice.inGameOption(option,this.room)

  }


  makeMove(i:number,j:number):void{
   
      let moveInfo:any=this.boardservice.clickPiece(i,j)
      if(Object.keys(moveInfo).length){

        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        
        if(moveInfo.isGameFinished==="white won"){
          this.finished="white won"
          this.openDialog("white won")
          
          
        }
        this.chatservice.makeMove(moveInfo,this.room)

      }
    

   
    /* this.chatservice.makeMove({from:}) */
  }

  

  constructor(private boardservice:BoardService,private chatservice:ChatService,private dialog:MatDialog) {
    this.board=this.boardservice.getBoard()
    /* this.boardservice.initGame(this.side) */
    console.log(this.side,"side")
  }

  
    
}
