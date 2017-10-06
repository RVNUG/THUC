import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule, Route } from "@angular/router";
import { FormsModule } from "@angular/forms";

const firebaseConfig = {
  "apiKey": "AIzaSyDdYgOhdvQGWC4fb7ReKzx7P6Ap3VUi_5w",
  "databaseURL": "https://rvnugthuc.firebaseio.com",
  "storageBucket": "rvnugthuc.appspot.com",
  "authDomain": "rvnugthuc.firebaseapp.com",
  "messagingSenderId": "612124242734",
  "projectId": "rvnugthuc"
};

const routes: Route[] = [
  { path: "home", component: HomeComponent },
  { path: "chat/:room", component: ChatComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
