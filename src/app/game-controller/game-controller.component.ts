import { WordSupplierService } from '../word-supplier.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  public char: string = ''; 
  public word: string[];
  public wins: number = 0;
  public hasWin: boolean = false;
  public correctEntries: string[] = [];
  public maxErrors: number = 6;
  private errors: number = 0;

  private allEntries = new Set<string>();
 
  
 

  constructor(private wordSuplyer: WordSupplierService) { 
    this.word = wordSuplyer.getAWord()
  }


  ngOnInit(): void {
    this.word = this.wordSuplyer.getAWord()
  }


  sendCharacter(characterInput: string): void{
    if(characterInput){
      this.char = characterInput
      this.allEntries.add(characterInput)
      if (!this.word.includes(characterInput)) this.errors++;
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

  getResult(): void{
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

