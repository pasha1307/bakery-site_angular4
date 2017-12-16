import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CafeComponent} from "./cafe/cafe.component";
import {BakeryComponent} from "./bakery/bakery.component";
import {ContactComponent} from "./contact/contact.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cafe', component: CafeComponent },
  { path: 'bakery', component: BakeryComponent },
  { path: 'contact', component: ContactComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
