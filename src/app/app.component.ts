import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import * as firebase from "firebase"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user$: Observable<firebase.User>;
  title = 'app';

  constructor(private auth: AngularFireAuth) {
    this.user$ = auth.authState;
  }

  login() {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.auth.signOut();
  }
}
