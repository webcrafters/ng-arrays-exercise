import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private _words: string[] = [
    'angular',
    'development',
    'rendering',
    'frontend',
    'application',
    'expression',
    'closure',
    'observable',
    'array',
    'code',
    'return',
    'angular',
    'development',
    'rendering',
    'frontend',
    'application',
    'expression',
    'closure',
    'observable',
    'array',
    'code',
    'return',
  ];

  constructor() {}

  getWords(): Observable<string[]> {
    return of(this._words);
    // "of" produce un observable care emite o singura valoare, pe cea din parametru. se emite instantaneu, in momentul in care te abonezi la el
  }

  /**
   * approach 1 - return an array that repeats the elements from this._words - as many times as necessary to have a length > @param howMany
   */
  getManyWords1(howMany: number) {}

  /**
   * approach 2 - use another data source - a kind of lipsum package from npm. Generate exactly @param howMany random words with it
   */
  getManyWords2(howMany: number) {}
}
