import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class SearchService {
  constructor(private db: AngularFireDatabase) { }
  getItems(start, end): FirebaseListObservable<any> {
    return this.db.list('/', {
      query: {
        orderByChild: 'Miasto_PL',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }
}
