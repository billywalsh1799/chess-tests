import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { UsernameService } from './services/username.service';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsernameService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
