import { Component, OnInit } from '@angular/core';
import {BAGELS, BREADS, PASTRIES} from '../app-data.products';
import {DetailTrigger} from './animations';
import {ALLITEMS} from "../app-data.update";

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss'],
  animations: [ DetailTrigger ]
})
export class BakeryComponent implements OnInit {
  breads = BREADS;
  bagels = BAGELS;
  pastries = PASTRIES;
  myall = ALLITEMS;
  vegan: any[];
  selItem;
  isSelected = false;
  showIn = false;
  type: Number = 1;
  constructor() {

  }
onTab(category) {
    switch (category) {
      case "1":
        return this.type = 1;
      case "2":
        return this.type = 2;
      case "3":
        return this.type = 3;
      case "4":
        return this.type = 4;
      default:
        return this.type = 1;
    }
}

  ngOnInit() {
    this.vegan = this.myall.filter((item) => {
      return item.vegan;
    });
  }
  onSelect(item) {
    this.selItem = item;
    this.isSelected = true;
    this.showIn = true;
  }
  setAnime() {
    return this.showIn === true ? 'in' : 'out';
  }

}
