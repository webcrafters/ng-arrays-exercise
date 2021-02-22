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

  rowsFromWords(words: string[]): string[][] {
    return words.map((word) => {
      const letters = word.split('');
      return letters.join('_').split('');
    });
  }
}
