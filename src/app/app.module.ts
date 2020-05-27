import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReplaceElementDirective } from './directive/replace-elem.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReplaceElementDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
