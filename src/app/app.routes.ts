import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from './components/shop/dashboard/dashboard.component';
import {OffersComponent} from "./components/shop/offers/offers.component";
import {PayoutDetailsComponent} from "./components/shop/payout-details/payout-details.component";
import {CategoryComponent} from "./components/shop/category/category.component";
import {DateTimeComponent} from "./components/shop/date-time/date-time.component";

import {LoginComponent} from "./components/compartido/Login/login/login.component";
import {SideNavComponent} from "./components/management/side-nav/side-nav.component";
import {NavbarComponent} from "./components/shop/navbar/navbar.component";
import {WorkersSupportComponent} from "./components/management/workers-support/workers-support.component";
import {RolesComponent} from "./components/management/roles/roles.component";
import {ConsumersComponent} from "./components/management/consumers/consumers.component";
import {DriversComponent} from "./components/management/drivers/drivers.component";
import {CategoryProductComponent} from "./components/management/category-product/category-product.component";
import {StoresComponent} from "./components/management/stores/stores.component";
import {HomeComponent} from "./components/User/home/home.component";
import {RegistroComponent} from "./components/compartido/Login/registro/registro-user/registro.component";
import {EleccionRegistroComponent} from "./components/compartido/Login/eleccionRegistro/eleccion-registro";
import {RegistroDeliveryComponent} from "./components/compartido/Login/registro/registro-delivery/registro-delivery.component";
import {RegistroTiendaComponent} from "./components/compartido/Login/registro/registro-tienda/registro-tienda.component";


const APP_ROUTES: Routes = [
  {
    path: "shop", component: NavbarComponent, children:
      [
        {path: "offers", component: OffersComponent},
        {path: "dashBoard", component: DashboardComponent},
        {path: "payoutDetails", component: PayoutDetailsComponent},
        {path: "category", component: CategoryComponent},
        {path: "dateTime", component: DateTimeComponent},
        {path: "**", pathMatch: "full", redirectTo: "dashBoard"}
      ]
  },
  {
    path: "admin", component: SideNavComponent, children:
      [
        {
          path: "eleccion-registro", component: EleccionRegistroComponent, children:
            [
              {path: "registroConsumer", component: RegistroComponent},
              {path: "registroDelivery", component: RegistroDeliveryComponent},
              {path: "registroTienda", component: RegistroTiendaComponent},
            ]
        },
        {path: "admin_users", component: WorkersSupportComponent},
        {path: "roles", component: RolesComponent},
        {path: "consumers", component: ConsumersComponent},
        {path: "drivers", component: DriversComponent},
        {path: "categoryProduct", component: CategoryProductComponent},
        {path: "stores", component: StoresComponent},
        {path: "**", pathMatch: "full", redirectTo: "admin_users"}
      ]
  },
  {
    path: "home", component: HomeComponent, children:
      [
        {path: "login", component: LoginComponent},
        // {path: "eleccion-registro", component: EleccionRegistroComponent, children:
        //     [
        //       {path: "registroConsumer", component: RegistroComponent},
        //     ]
        // },
      ]
  },
  {
    path: "eleccion-registro", component: EleccionRegistroComponent, children:
    [
      {path: "registroConsumer", component: RegistroComponent},
      {path: "registroDelivery", component: RegistroDeliveryComponent},
      {path: "registroTienda", component: RegistroTiendaComponent},
    ]
  },
  {path: "login", component: LoginComponent},
  {path: "**", pathMatch: "full", redirectTo: "admin"}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
