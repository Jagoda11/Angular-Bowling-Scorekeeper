import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewGameComponent } from './new-game/new-game.component';
import { PreviousScoresComponent } from './previous-scores/previous-scores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewGameComponent,
    PreviousScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
