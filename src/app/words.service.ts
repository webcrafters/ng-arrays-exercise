import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor() {}

  /**
   * use lipsum package to generate exactly @param howMany random words,
   * @returns an observable that emits exactly once and then completes
   */
  getManyWordsLipsum(howMany: number): Observable<string[]> {
    return of([]);
  }
}
