import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentService } from './data/department.service';

const routes: Routes = [
  { path: 'departments', component: DepartmentListComponent, data: { animation: 'departments' } },
  {
  path: 'departments/:id', component: DepartmentDetailsComponent,
  children: [
    { path: 'overview', component: DepartmentOverviewComponent },
    { path: 'contact', component: DepartmentContactComponent },
  ]
}];

@NgModule({
  declarations: [DepartmentListComponent, DepartmentDetailsComponent, DepartmentOverviewComponent, DepartmentContactComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [DepartmentService],
  exports: []
})
export class DepartmentsModule { }
