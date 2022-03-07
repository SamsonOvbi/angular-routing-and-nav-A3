import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductContactComponent } from './product-contact/product-contact.component';
import { ProductService } from './data/product.service';

const routes: Routes = [
  //{ path: 'products', component: LayoutComponent },
  { path: 'products', component: ProductListComponent, data: { animation: 'products' } },
  {
  path: 'products/:id', component: ProductDetailsComponent,
  children: [
    { path: 'overview', component: ProductOverviewComponent },
    { path: 'contact', component: ProductContactComponent }, 
  ] 
}];
 
@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductOverviewComponent, ProductContactComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [ProductService],
  exports: []
})
export class ProductsModule { }
