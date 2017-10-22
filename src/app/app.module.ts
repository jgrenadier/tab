import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//
// jag : firebase imports
//
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 

import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //
    // jag: initialize the modules for firebase
    //
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
