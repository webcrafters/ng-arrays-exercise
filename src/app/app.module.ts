import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordCountComponent } from './word-count/word-count.component';
import { LoremIpsum } from 'lorem-ipsum';

@NgModule({
  declarations: [AppComponent, WordCountComponent],
  imports: [BrowserModule],
  providers: [LoremIpsum],
  bootstrap: [AppComponent],
})
export class AppModule {}
