import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

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
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    OffersComponent,
    PayoutDetailsComponent,
    CategoryComponent,
    DateTimeComponent,
    HomeComponent,
    LoginComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
