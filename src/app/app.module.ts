
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';

import { ReactiveFormsModule } from '@angular/forms';
import { NoteFormComponent } from './note-form.component';
// import { HttpModule } from '@angular/http';


import { NoteComponent } from './note.component';


//
// jag: details to access this particular firebase database
//
export const firebaseConfig = {
  apiKey: "AIzaSyBHF9cvHju6g47S9zfSPOCXbBCHtjwh4A0",
  authDomain: "tabbyproject-b3d9f.firebaseapp.com",
  databaseURL: "https://tabbyproject-b3d9f.firebaseio.com",
  projectId: "tabbyproject-b3d9f",
  storageBucket: "",
  messagingSenderId: "356597008347"
}

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
