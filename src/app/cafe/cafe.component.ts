import { Component, OnInit } from '@angular/core';
import {COLD_DRINKS, HOT_DRINKS, SANDWICHES} from "../app-data.drink";

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {
  cold_drinks: any[] = [];
  hotdrinks = [];
  sandwiches = [];
  iced = [{name: 'Late', size: {medium: '2.30', large: '3.50', extra: '4.50'} },
    {name: 'Mote', size: {medium: '3.40', large: '3.00', extra: '5.50'} },
    {name: 'Bute', size: {medium: '2.60', large: '2.50', extra: '6.50'} },
    {name: 'Kate', size: {medium: '2.70', large: '1.50', extra: '7.50'} }

  ];
  constructor() { }

  ngOnInit() {
    this.cold_drinks = COLD_DRINKS;
    this.hotdrinks = HOT_DRINKS;
    this.sandwiches = SANDWICHES;
  }

}
