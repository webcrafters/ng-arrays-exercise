import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-word-count',
  templateUrl: './word-count.component.html',
  styleUrls: ['./word-count.component.scss'],
})
export class WordCountComponent {
  @Output() countChanged = new EventEmitter<number>();

  constructor() {}

  setWordCount(v: string) {
    this.countChanged.emit(+v);
  }
}
