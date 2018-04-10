import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './../firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'lsl-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [FirebaseService]
})
export class EditComponent implements OnInit {
  item: any;
  users: FirebaseListObservable<any[]>;
  user = null;
  private sub: any;
  id;
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

  constructor(private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    public db: AngularFireDatabase) { }

    ngOnInit() {
      this.wasEditted= false;
      this.sub = this.route
        .queryParams
        .subscribe(params => {
          // Defaults to 0 if no query param provided.
          this.id = params['id'];

          console.log('Query param id: ', this.id);

        });
        if(!this.auth.isLoggedIn()){
          this.router.navigate(['/']);
        }

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
   }

   wasEditted: boolean;

   onEditSubmit(){
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

     this.firebaseService.updateItem(this.id, item);
    //  this.wasEditted = true;
     this.router.navigate(['/display'],{ queryParams: { id: this.id } });

   }
   isLoggedIn() {

   return this.auth.isLoggedIn();
   }
   
   ngOnDestroy() {
    this.sub.unsubscribe();
   }


}
