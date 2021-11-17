import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

//Rutas
import {APP_ROUTING} from "./app.routes";

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shop/navbar/navbar.component';
import { DashboardComponent } from './components/shop/dashboard/dashboard.component';
import { OffersComponent } from './components/shop/offers/offers.component';
import { PayoutDetailsComponent } from './components/shop/payout-details/payout-details.component';
import { CategoryComponent } from './components/shop/category/category.component';
import { DateTimeComponent } from './components/shop/date-time/date-time.component';
import { LoginComponent } from './components/compartido/login/login.component';
import { SideNavComponent } from './components/management/side-nav/side-nav.component';
import { WorkersSupportComponent } from './components/management/workers-support/workers-support.component';
import { RolesComponent } from './components/management/roles/roles.component';
import { ConsumersComponent } from './components/management/consumers/consumers.component';
import { DriversComponent } from './components/management/drivers/drivers.component';
import { CategoryProductComponent } from './components/management/category-product/category-product.component';
import { StoresComponent } from './components/management/stores/stores.component';
import {FooterComponent} from "./components/compartido/Footer/footer";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    OffersComponent,
    PayoutDetailsComponent,
    CategoryComponent,
    DateTimeComponent,
    LoginComponent,
    FooterComponent,
    SideNavComponent,
    WorkersSupportComponent,
    RolesComponent,
    ConsumersComponent,
    DriversComponent,
    CategoryProductComponent,
    StoresComponent
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
