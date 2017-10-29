import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { AngularFireAuth } from "angularfire2/auth";
import { Post } from '../post';
import * as firebase from "firebase";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  posts$: any;
  roomCollection: AngularFirestoreCollection<any>;
  room$: Observable<string>;

  constructor(private route: ActivatedRoute, private auth: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit() {
    this.room$ = this.route.paramMap
      .map(params => params.get("room"));

    this.room$
      .subscribe(room => {
        this.roomCollection = this.db.collection<Post>(room, ref => ref.orderBy("timestamp", "desc"));
        this.posts$ = this.roomCollection.valueChanges();
      });
  }

  addPost(message) {
    const user = this.auth.auth.currentUser;

    
    this.roomCollection.add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}
