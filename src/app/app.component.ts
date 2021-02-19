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
    // solution based on setting the actual top value for the word-div

    const divHeight = 18; // only works if we know the div height for any row to be 18px
    const availableHeight = window.innerHeight;
    const slotHeight = availableHeight / totalWords; // n words => n slots of this height
    const adjustmentAtIndex = (slotHeight - divHeight) * (i / totalWords); // compensates for difference between divHeight and slotHeight
    return `${slotHeight * i + adjustmentAtIndex}px`;
  }
}
