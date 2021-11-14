import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import {APP_ROUTING} from "./app.routes";

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/compartido/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OffersComponent } from './components/offers/offers.component';
import { PayoutDetailsComponent } from './components/payout-details/payout-details.component';
import { CategoryComponent } from './components/category/category.component';
import { DateTimeComponent } from './components/date-time/date-time.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    OffersComponent,
    PayoutDetailsComponent,
    CategoryComponent,
    DateTimeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
