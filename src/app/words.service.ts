import { Injectable } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private lipsum: LoremIpsum) {}

  /**
   * use lipsum package to generate exactly @param howMany random words,
   * @returns an observable that emits exactly once and then completes
   */
  getManyWordsLipsum(howMany: number): Observable<string[]> {
    return of(this.lipsum.generateWords(howMany).split(' '));
  }
}
