import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() hasWin: Boolean = false
  @Input() disabled: Boolean = false
  @Output() receivedLetter = new EventEmitter()
  @Output() onClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sendCharacter(input: HTMLInputElement){
    this.receivedLetter.emit(input.value.toUpperCase())
    input.value = ''
  }

  sendOnClick(){
    this.onClick.emit()
  }

}
