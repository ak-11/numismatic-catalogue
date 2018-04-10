import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {FirebaseService} from './../firebase.service';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [FirebaseService, AuthService]
})
export class DisplayComponent implements OnInit {

  users: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any>;
  user= null;
  item= null;
  password: string = null;
  mail: string = null;
  private sub: any;
  chosenSubject: Subject<any>;
  authorised: boolean = false;
  id: any;
  //Euzytkownik: String = this.user.email;
  Region;
  Miasto_PL;
  Nazwa;
  Emitent;
  Nominal;
  Typ;
  Waluta;
  Numer;
  Seria;
  Stan;
  Data_wejscia;
  Data_wyjscia;
  NumKat_DN;
  DN_stan1;
  DN_stan3;
  NumKat_Podczaski;
  Podczaski_stan1;
  Podczaski_stan3;
  NumKat_Tieste;
  Tieste_stan1;
  Tieste_stan3;
  Cena_Euro;
  Cena_PLN;
  uwagi;
  Uzytkownik;

  wasDeleted: boolean;

  ngOnInit() {

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = params['id'];

        console.log('Query param id: ', this.id);
        // this.chosenSubject.next(this.id);

      });
      this.firebaseService.getItemDetails(this.id).subscribe(item => {
        this.Region = item.Region;
        this.Miasto_PL = item.Miasto_PL;
        this.Nazwa = item.Nazwa;
        this.Emitent = item.Emitent;
        this.Nominal = item.Nominal;
        this.Typ = item.Typ;
        this.Waluta = item.Waluta;
        this.Numer = item.Numer;
        this.Seria = item.Seria;
        this.Stan = item.Stan;
        this.Data_wejscia = item.Data_wejscia;
        this.Data_wyjscia = item.Data_wyjscia;
        this.NumKat_DN = item.NumKat_DN;
        this.DN_stan1 = item.DN_stan1;
        this.DN_stan3 = item.DN_stan3;
        this.NumKat_Podczaski = item.NumKat_Podczaski;
        this.Podczaski_stan1 = item.Podczaski_stan1;
        this.Podczaski_stan3 = item.Podczaski_stan3;
        this.NumKat_Tieste = item.NumKat_Tieste;
        this.Tieste_stan1 = item.Tieste_stan1;
        this.Tieste_stan3 = item.Tieste_stan3;
        this.Cena_Euro = item.Cena_Euro;
        this.Cena_PLN = item.Cena_PLN;
        this.uwagi = item.uwagi;
        this.Uzytkownik = item.Uzytkownik;


      });
      this.auth.getAuthState().subscribe(
        (user) => this.user = user);
        this.users = this.db.list('/users');
        this.password = null;
        this.mail = null;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private firebaseService:FirebaseService,
    public db: AngularFireDatabase){
      // this.chosenSubject = new Subject();
      // this.items = db.list('/',{
      //    query: {
      //    orderByChild: 'Numer',
      //    limitToLast: 1,
      //    equalTo: this.chosenSubject,
      //   }
      // });

  }


  // findChosen(me){
  //   this.chosenSubject.next(me);
  // }
  matched(){

    if(this.Uzytkownik == this.user.email){
      this.authorised = true;
      console.log('YAY');
    }
  }

  deleteItem(id){
      this.firebaseService.deleteListing(id);
      this.router.navigate(['/your-collection']);
  }




  signUp(){
    this.login = false;
    this.auth.signUpWithEmail(this.mail, this.password);
  }

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


    loginWithGoogle() {
    this.auth.loginWithGoogle();
    this.mail = this.user.email;
    }

    logout() {
    this.auth.logout();
    }

    isLoggedIn() {
    this.matched();
    return this.auth.isLoggedIn();
    }


  ngOnDestroy() {
   this.sub.unsubscribe();
 }

}
