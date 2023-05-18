import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Square } from 'src/models/square/Square';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket: Socket
  url:string="http://localhost:8080"

  constructor() {
    this.socket=io(this.url)
   }

  sendMessage(message:{sender:string,content:string,time:string},room:string): void {
  this.socket.emit('new message', message,room);
  }

  getMessages(): Observable<{sender:string,content:string,time:string}> {
    return new Observable<any>(observer => {
      this.socket.on('new message', (message) => {
        observer.next(message);
      });
    });
  }

  

  createGame(gameInfo:{room:string,client:string,gameSettings:any}){
    this.socket.emit("create game",gameInfo)
  }

  joinGame(gameInfo:{room:string,client:string}){
    this.socket.emit("join game",gameInfo)
  }

  onStartGame(): Observable<{start:boolean,opponent:string,gameSettings:any}> {

    return new Observable<{start:boolean,opponent:string,gameSettings:any}>(observer => {
      this.socket.on('start game', (ready) => {
        observer.next(ready);
      });
    });

  }

  makeMove(move:any,room:any):void{
    this.socket.emit("move made",move,room)
  }

  onMoveMade(): Observable<any>{
    return new Observable<any>(observer => {
      this.socket.on('move made', (move) => {
        observer.next(move);
      });
    });


  }


}