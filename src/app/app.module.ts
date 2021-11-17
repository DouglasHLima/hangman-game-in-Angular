import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputControllerComponent } from './input-controller/input-controller.component';
import { DisplayLettersComponent } from './display-letters/display-letters.component';
import { CounterComponent } from './counter/counter.component';
import { WinnerLabelComponent } from './winner-label/winner-label.component';

@NgModule({
  declarations: [
    AppComponent,
    InputControllerComponent,
    DisplayLettersComponent,
    CounterComponent,
    WinnerLabelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
