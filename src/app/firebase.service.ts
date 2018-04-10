import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  items: FirebaseListObservable<any>;
  item: FirebaseObjectObservable<any>;


  constructor(private db: AngularFireDatabase) {
    this.items = this.db.list('/')

  }

  getListings(){
    return this.items;
  }

  getItemDetails(id){
   this.item = this.db.object('/'+id) as FirebaseObjectObservable<any>
   return this.item;
 }

  addListing(item){
    const list = this.db.list('/');
    // Create root ref
    list.push(item);
  }

  updateItem(id, listing){
    return this.items.update(id, listing);
  }

  deleteListing(id){
    return this.items.remove(id);
  }

}
