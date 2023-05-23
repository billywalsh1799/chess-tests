import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoardComponent } from '../models/board/board.component';
import { GameComponent } from '../models/game/game.component';
import { BoardService } from './services/boardservice/board.service';
import { ChatComponent } from './components/chat/chat.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ChatService } from './services/chatservice/chat.service';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { GameService } from './services/gameservice/game.service';
import { WaitingComponent } from './components/waiting/waiting.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    GameComponent,
    ChatComponent,
    HomeComponent,
    WaitingComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [BoardService,ChatService,GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
