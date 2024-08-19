import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: "",
    redirectTo: "catalog",
    pathMatch: "full"
  },
  { path: "catalog",
    component: CatalogComponent
  },
  { path: "orders",
    component: OrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
