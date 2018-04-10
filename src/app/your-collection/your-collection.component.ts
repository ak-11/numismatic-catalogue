
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router } from '@angular/router';
import {enableProdMode} from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'your-collection',
  templateUrl: './your-collection.component.html',
  styleUrls: ['./your-collection.component.css']
})
export class YourCollectionComponent implements OnInit {
  title= 'IA project';
  users: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any>;
  user = null;
  item = null;
  // name: String = this.user.displayName;
  password: string = null;
  mail: string = null;

  ngOnInit() {
   this.auth.getAuthState().subscribe(
     (user) => this.user = user);
     this.findUser();
     this.users = this.db.list('/users');

     this.password = null;
     this.mail = null;


  }

  userSubject: Subject<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    public db: AngularFireDatabase) {
    this.userSubject = new Subject();
    this.items = db.list('/',{
       query: {
       orderByChild: 'Uzytkownik',
       equalTo: this.userSubject,
      }
    });
    // console.log(this.user.displayName.length);
  // this.name =  this.user.displayName;

//   this.newName();
  }
signUp(){
  this.login = false;
  this.auth.signUpWithEmail(this.mail, this.password);
}

// newName(){
//   if(this.name.length == 0 ){
//     this.name = this.mail;
//   }
// }

signup: boolean = false;

signup1(){
  this.signup = true;
}
login: boolean = false;

login1(){
  this.login = true;
}

onSubmitEmail(mail){
  this.mail = mail;
}

onSubmitPass(password){
  this.password = password;
}

loginWithEmail(){
  this.signup = false;
  this.auth.signInwithEmail(this.mail, this.password);
}


  findUser(){
    this.userSubject.next(this.user.email);
  }


  loginWithGoogle() {
  this.auth.loginWithGoogle();
  }

  logout() {
  this.auth.logout();
  }

  isLoggedIn() {
  this.findUser();
  return this.auth.isLoggedIn();
  }

}
