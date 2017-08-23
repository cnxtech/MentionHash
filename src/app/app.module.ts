import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContenteditableModel} from "./contenteditable-model.directive";

@NgModule({
  declarations: [
    AppComponent,
    ContenteditableModel
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
