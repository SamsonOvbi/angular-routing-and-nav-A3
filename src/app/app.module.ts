import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArticlesModule } from './components/articles/articles.module';
import { DepartmentsModule } from './components/departments/departments.module';
import { EmployeesModule } from './components/employees/employees.module';
import { ProductsModule } from './components/products/products.module';
import { LegalModule } from './components/legal/legal.module';
import { UtilityModule } from './components/utility/utility.module';
import { EmployeeService } from './components/employees/data/employee.service';
import { ShopModule } from './components/shop/shop.module'; 
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    CommonModule,
    ArticlesModule,
    DepartmentsModule,
    EmployeesModule,
    ProductsModule,
    UtilityModule,
    LegalModule,
    ShopModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
