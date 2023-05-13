import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameInfo:any

  constructor() { }

  getGameInfo(){
    return this.gameInfo
  }

  setGameInfo(gameinfo:any){
    this.gameInfo=gameinfo
    
  }
}
