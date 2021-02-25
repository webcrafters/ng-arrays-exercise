import { Component } from '@angular/core';
import { WordsService } from './words.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'arrays-exercise';
  words$ = of([] as string[]);
  constructor(private wordsSvc: WordsService) {}

  updateCount(c: number) {
    this.words$ = this.wordsSvc.getManyWordsLipsum(c);
  }
}
