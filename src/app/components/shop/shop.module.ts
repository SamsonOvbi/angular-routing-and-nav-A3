import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { OrderListComponent } from './order/order-list.component';
import { ProductListComponent } from './product/product-list.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/shopping.reducer';
import { ViewComponent } from './view/view.component';
import { Database } from './shared/database';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

const routes: Routes = [
  { path: 'shopping', component: LayoutComponent },
  { path: '', component: ProductListComponent },
  { path: 'prod-list', component: OrderListComponent },
];

@NgModule({
  declarations: [
    LayoutComponent,
    ProductListComponent,
    OrderListComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), HttpClientModule, FormsModule,
    //InMemoryWebApiModule.forRoot(Database),
    StoreModule.forRoot({ shopping: ShoppingReducer }),
  ]
})
export class ShopModule { }
