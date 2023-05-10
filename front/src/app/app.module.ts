import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from '../models/board/board.component';
import { GameComponent } from '../models/game/game.component';
import { BoardService } from './services/boardservice/board.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/userservice/user.service';
import { ChatService } from './services/chatservice/chat.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    GameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [BoardService,UserService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
