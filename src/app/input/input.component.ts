import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router } from '@angular/router';
import {enableProdMode} from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import {FirebaseService} from './../firebase.service';

@Component({
  selector: 'inputing',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [FirebaseService]
})
export class InputComponent implements OnInit {

  item: any;
  Region: String;
  Miasto_PL: String;
  Nazwa: String;
  Emitent: String;
  Nominal: String;
  Typ: String;
  Waluta: String;
  Numer: String;
  Seria: String;
  Stan: String;
  Data_wejscia: String;
  Data_wyjscia: String;
  NumKat_DN: String;
  DN_stan1: String;
  DN_stan3: String;
  NumKat_Podczaski: String;
  Podczaski_stan1: String;
  Podczaski_stan3: String;
  NumKat_Tieste: String;
  Tieste_stan1: String;
  Tieste_stan3: String;
  Cena_Euro: String;
  Cena_PLN: String;
  uwagi: String;
  Uzytkownik: String;



  constructor(public db: AngularFireDatabase,
    private firebaseService:FirebaseService,
      private router:Router) { }

  ngOnInit() {
    this.wasSubmitted= false;
  }

  wasSubmitted: boolean;

  onAddSubmit(){
    let item = {
      Region: this.Region,
      Miasto_PL: this.Miasto_PL,
      Nazwa: this.Nazwa,
      Emitent: this.Emitent,
      Nominal: this.Nominal,
      Typ: this.Typ,
      Waluta: this.Waluta,
      Numer: this.Numer,
      Seria: this.Seria,
      Stan: this.Stan,
      Data_wejscia: this.Data_wejscia,
      Data_wyjscia: this.Data_wyjscia,
      NumKat_DN: this.NumKat_DN,
      DN_stan1: this.DN_stan1,
      DN_stan3: this.DN_stan3,
      NumKat_Podczaski: this.NumKat_Podczaski,
      Podczaski_stan1: this.Podczaski_stan1,
      Podczaski_stan3: this.Podczaski_stan3,
      NumKat_Tieste: this.NumKat_Tieste,
      Tieste_stan1: this.Tieste_stan1,
      Tieste_stan3: this.Tieste_stan3,
      Cena_Euro: this.Cena_Euro,
      Cena_PLN: this.Cena_PLN,
      uwagi: this.uwagi,
      Uzytkownik: this.Uzytkownik

    }
    this.firebaseService.addListing(item);
    //this.wasSubmitted = true;
    this.router.navigate(['/your-collection']);
}
  }
