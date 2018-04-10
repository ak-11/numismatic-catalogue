import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'lsl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  lastKeypress: number = 0;
  items;
  startAt = new Subject()
  endAt = new Subject()
  constructor(private searchSvc: SearchService) { }
  ngOnInit() {
    this.searchSvc.getItems(this.startAt, this.endAt)
                  .subscribe(items => this.items = items)
    this.wasClicked = true;
  }
  search($event) {
    if ($event.timeStamp - this.lastKeypress > 2) {
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }
  this.lastKeypress = $event.timeStamp
  this.wasClicked= false
  }

  wasClicked: boolean = false;

  clicked(){
    this.startAt.next(" ")
    this.endAt.next(" "+"\uf8ff")
    this.wasClicked= true;
  }

}
