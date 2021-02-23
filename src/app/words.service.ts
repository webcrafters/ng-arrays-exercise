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
    'subscription',
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
  getManyWords1(howMany: number): Observable<string[]> {
    const n = this._words.length;
    const times = Math.ceil(howMany / n);

    // sol 1
    // imperative push
    // const result = [];
    // for (let i = 0; i < times; i++) {
    //   result.push(...this._words);
    // }

    // sol 2
    // imperative concat
    // let result: string[] = [];
    // for (let i = 0; i < times; i++) {
    //   result = result.concat(this._words);
    // }

    // sol 3
    // decalarative concat
    // generate an array of copies of this_words
    // flatten that array with concat and spread operator

    const copies = new Array(times).fill(this._words);
    const result = [].concat(...copies);

    return of(result);
  }

  /**
   * approach 2 - use another data source - a kind of lipsum package from npm. Generate exactly @param howMany random words with it
   */
  getManyWords2(howMany: number): Observable<string[]> {
    return this.getWords();
  }
}
