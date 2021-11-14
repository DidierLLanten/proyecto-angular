import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {OffersComponent} from "./components/offers/offers.component";
import {PayoutDetailsComponent} from "./components/payout-details/payout-details.component";
import {CategoryComponent} from "./components/category/category.component";
import {DateTimeComponent} from "./components/date-time/date-time.component";

const APP_ROUTES: Routes = [
  {path: "dashBoard", component: DashboardComponent},
  {path: "offers", component: OffersComponent},
  {path: "payoutDetails", component: PayoutDetailsComponent},
  {path: "category", component: CategoryComponent},
  {path: "dateTime", component: DateTimeComponent},
  {path: "**", pathMatch: "full", redirectTo: "dashBoard"}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
