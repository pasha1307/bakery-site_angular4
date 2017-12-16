import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  onMenu() {
    const text = document.getElementById('menu_text');
    if (text.classList.contains('collapse')) {
      text.classList.remove('collapse');
    } else {
      text.classList.add('collapse');
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
