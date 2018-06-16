import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewnoteComponent } from './newnote/newnote.component';
import { NoteService } from './note.service';


@NgModule({
  declarations: [
    AppComponent,
    NewnoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
