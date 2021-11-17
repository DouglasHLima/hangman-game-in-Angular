import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordSupplierService {

  private words: string[] = ['abacaxi','pipoca','brasilia','brasil','elefante',
  'pipoca','pastel','palindromo','domo','rei','rainha']

  private lastSorted: string = ''
  




  constructor() { }

  private sortWord(): string {
    return this.words[Math.round(Math.random()*this.words.length)]
  }

  getAWord(){
    let sortedCurrentWord = this.sortWord()
    while(this.lastSorted === sortedCurrentWord){
      sortedCurrentWord = this.sortWord()
    }
    this.lastSorted = sortedCurrentWord
    return sortedCurrentWord.split('')
  }
}
