import { WordSupplierService } from '../word-supplier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-controller',
  templateUrl: './input-controller.component.html',
  styleUrls: ['./input-controller.component.css']
})
export class InputControllerComponent implements OnInit {

  public char: string = ''
  public word: string[]
  public wins: number = 0
  public hasWin: boolean = false
  public correctEntries: string[] = []

  private allEntries = new Set<string>()
  private errors: number = 0
 

  constructor(private wordSuplyer: WordSupplierService) { 
    this.word = wordSuplyer.getAWord()
  }


  ngOnInit(): void {
  }

  sendCharacter(characterInput:HTMLInputElement): void{
    if(characterInput.value){
      this.char = characterInput.value
      this.allEntries.add(characterInput.value)
      if (!this.word.includes(characterInput.value)) this.errors++;
      characterInput.value = ''
    }
  }

  verifyCharacter(letter:string, index:number): Boolean{
    if(this.char === letter){
      this.correctEntries[index] = letter
    }
     return this.char === letter
  }

  getEntries(): string{
    let entries: string[] = []
    this.allEntries.forEach(char=>{
      entries = [...entries,char]
    })
    return entries.toString()
  }

  getErrors(): number{
    return this.errors
  }

  getResults(): void{
    if(this.correctEntries.join("") === this.word.join("")){
      this.wins++;
      this.hasWin = true
    }
  }

  resetGame(): void{
    this.char = ''
    this.allEntries.clear()
    this.errors = 0
    this.correctEntries= []
    this.hasWin = false
    this.word = this.wordSuplyer.getAWord()
  }
  resetAllGame(): void{
    this.resetGame()
    this.wins = 0
    this.hasWin = false
  }
}
