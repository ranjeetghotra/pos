import { Component, OnInit } from '@angular/core';
import { WatchList } from './watch-list.data';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.page.html',
  styleUrls: ['./watch-list.page.scss'],
})
export class WatchListPage implements OnInit {
  watchList = WatchList;
  constructor() { }

  ngOnInit() {
  }

}
