import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatComponent } from './chat/chat.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

const config = {
  apiKey: 'AIzaSyC2fAv3c9DheHcrnTwHxHGEKfvp3S19vrc',
  authDomain: 'chatsitoome.firebaseapp.com',
  databaseURL: 'https://chatsitoome.firebaseio.com',
  projectId: 'chatsitoome',
  storageBucket: 'chatsitoome.appspot.com',
  messagingSenderId: '940591141154'
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
