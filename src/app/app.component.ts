import { Component } from '@angular/core';
import { WordsService } from './words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'arrays-exercise';
  words$ = this.wordsSvc.getWords();
  constructor(private wordsSvc: WordsService) {}

  processWords(words: string[]): string[][] {
    return words.map((word) => word.split(''));
  }

  getTopFor(i: number, totalWords: number): string {
    // solution based on displaying each word div with its CENTER at the value calculated below
    const divHeight = 18;
    // we leave room for one half div at the bottom and one half div at the top by reducing the supposedly available height
    const availableHeight = window.innerHeight - divHeight;
    const slotHeight = availableHeight / totalWords; // n words => n slots of this height
    return `${
      slotHeight * (i + 0.5) + // at the vertical middle of the slot is the vertical middle of the div
      divHeight / 2 // each element gets translated with half its height down, to get central overall placement within the modified availableHeight
    }px`;
  }
}
