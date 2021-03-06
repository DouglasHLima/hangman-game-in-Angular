import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-winner-label',
  templateUrl: './winner-label.component.html',
  styleUrls: ['./winner-label.component.css']
})
export class WinnerLabelComponent implements OnInit {

  @Input() wins: number = 0
  @Input() result: Boolean = false
  
  @Output() continueGame = new EventEmitter()
  @Output() resetAll = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  continue(){
    this.continueGame.emit()
  }

  resetAllGame(){
    this.resetAll.emit()
  }

}
