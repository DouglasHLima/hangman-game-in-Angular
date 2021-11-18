import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import { DisplayLettersComponent } from './display-letters/display-letters.component';
import { CounterComponent } from './counter/counter.component';
import { WinnerLabelComponent } from './winner-label/winner-label.component';
import { InputComponent } from './game-controller/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllerComponent,
    DisplayLettersComponent,
    CounterComponent,
    WinnerLabelComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
