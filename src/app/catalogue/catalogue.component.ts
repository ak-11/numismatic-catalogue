import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as _ from 'lodash';

@Component({
  selector: 'catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent{

    items: FirebaseListObservable<any[]>;
    Items: any;
    filteredItems: any;
    item= null;
    property: string;
    rule: string;

    constructor(public db: AngularFireDatabase) {
      this.items = db.list('/',{
         query: {
         orderByChild: "Numer",
        }
      });
    }

    ngOnInit(){
      this.db.list('/')
      .subscribe(items => {
      this.Items = items;})
    }

 filterExact() {
   this.items = this.db.list('/',{
      query: {
      orderByChild: this.property ,
      equalTo: this.rule,
     }
   });
  }
  onSubmitProperty(property){
    this.property = property;
  }

  onSubmitRule(rule){
    this.rule = rule
  }

    reset(){
      this.items = this.db.list('/',{
         query: {
         orderByChild: 'Numer',
        }
      });
    }

    findRegion(chosen){
      this.items = this.db.list('/',{
         query: {
         orderByChild: 'Region',
         equalTo: chosen,
        }
      });
    }

    findMiasto(chosen){
      this.items = this.db.list('/',{
         query: {
         orderByChild: 'Miasto_PL',
         equalTo: chosen,
        }
      });
    }

    findEmitent(chosen){
      this.items = this.db.list('/',{
         query: {
         orderByChild: 'Emitent',
         equalTo: chosen,
        }
      });
    }

    findTyp(chosen){
      this.items = this.db.list('/',{
         query: {
         orderByChild: 'Typ',
         equalTo: chosen,
        }
      });
    }

    findNominal(chosen){
      this.items = this.db.list('/',{
         query: {
         orderByChild: 'Nominal',
         equalTo: chosen,
        }
      });
    }

    findWaluta(chosen){
      this.items = this.db.list('/',{
         query: {
         orderByChild: 'Waluta',
         equalTo: chosen,
        }
      });
    }


}
