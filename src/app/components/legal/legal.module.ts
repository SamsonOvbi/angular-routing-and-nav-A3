import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyComponent } from './privacy/privacy.component';
import { LegalDetailsComponent } from './legal-details/legal-details.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  //{ path: 'legal', component: LegalListComponent },
  {
    path: 'legal', component: LegalDetailsComponent,
    children: [
      { path: 'privacy', component: PrivacyComponent },
      { path: 'terms', component: TermsComponent },
    ]
  },
]; 

@NgModule({
  declarations: [LegalDetailsComponent, PrivacyComponent, TermsComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: []
}) 
export class LegalModule { }
