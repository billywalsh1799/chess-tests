import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  user:string=""
  side:string=""
  time:string=""

  constructor() { }

  getUser():string{
    return this.user
  }

  setUser(user:string):void{
    this.user=user
  }

  getSide():string{
    return this.side
  }

  setSide(side:string):void{
    this.side=side
  }

  getTime():string{
    return this.time
  }

  setTime(time:string){
    this.time=time
  }

}
