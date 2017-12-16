import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DetailTrigger} from '../animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [ DetailTrigger ]
})
export class ProductComponent implements OnInit {
  @Input() item;
  @Output() onClose = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
onModalClose() {
    this.onClose.emit();
}
onTest() {
    console.log('CLicked');
}
}
