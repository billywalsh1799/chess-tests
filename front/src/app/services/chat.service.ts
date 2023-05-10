import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket: Socket
  url:string="http://localhost:8080"

  constructor() {
    this.socket=io(this.url)
   }

  sendMessage(message:any,room:any): void {
  this.socket.emit('new-message', message,room);
  }

  getMessages(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }

  

  createGame(gameInfo:any){
    this.socket.emit("create game",gameInfo)
  }

  joinGame(gameInfo:any){
    this.socket.emit("join game",gameInfo)
  }

  onJoinGame(){
    return new Observable<any>(observer => {
      this.socket.on('join game', (otheruser) => {
        observer.next(otheruser);
      });
    });

  }

  onStartGame(){

    return new Observable<any>(observer => {
      this.socket.on('start game', (ready) => {
        observer.next(ready);
      });
    });

  }


}

