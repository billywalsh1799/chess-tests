import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  user:string=""
  side:string=""
  time:number=0

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

  getTime():number{
    return this.time
  }

  setTime(time:number){
    this.time=time
  }

}
