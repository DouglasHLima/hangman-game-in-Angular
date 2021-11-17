import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-letters',
  templateUrl: './display-letters.component.html',
  styleUrls: ['./display-letters.component.css']
})
export class DisplayLettersComponent implements OnInit{

  @Input() character:string =''

  value:string = ''

  constructor() { }


  ngOnInit(): void {
  }

}
