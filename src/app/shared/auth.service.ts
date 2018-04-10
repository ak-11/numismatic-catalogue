import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
// export class EmailPasswordCredentials {
//   email: string;
//   password: string;
// }
  export class AuthService {
  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null;

  constructor(public afAuth: AngularFireAuth) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

 signUpWithEmail(email, password){
   return this.afAuth.auth.createUserWithEmailAndPassword(email, password), this.afAuth.auth.signInWithEmailAndPassword(email, password);
 }

 signInwithEmail(email, password){
   return this.afAuth.auth.signInWithEmailAndPassword(email, password);
 }


  getAuthState() {
    return this.authState;
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isLoggedIn() {
    if(this.currentUser == null) {
      return false;
    }
      return true;
  }
}
