import {animate, keyframes, style, transition, trigger} from '@angular/animations';
export const DetailTrigger = trigger('detail', [
  // transition(':enter', [
  //   animate('400ms ease-in', keyframes([
  //     style({opacity: 0, transform: 'translateX(0%)', offset: 0}),
  //     style({opacity: 1, transform: 'translateX(5%)', offset: 0.7}),
  //     style({opacity: 1, transform: 'translateX(0)', offset: 1})
  //   ]))
  // ])
]);
