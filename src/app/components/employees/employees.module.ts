import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeService } from './data/employee.service';
 
const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent, data: { animation: 'employees' } },
  {
  path: 'employees/:id', component: EmployeeDetailComponent,
  children: [
    { path: 'overview', component: EmployeeOverviewComponent },
    { path: 'contact', component: EmployeeContactComponent }, 
  ] 
}];
 
@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailComponent, EmployeeOverviewComponent, EmployeeContactComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [EmployeeService],
  exports: []
})
export class EmployeesModule { }
