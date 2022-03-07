import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WildcardPagenotfoundComponent } from './components/wildcard-pagenotfound/wildcard-pagenotfound.component';

const routes: Routes = [
  // default path
  //{ path: '', component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: WildcardPagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// to store all routing component and avoid importing/writing duplicate list of components in app.routing.module / app.module.
// create a array of all routing components export it, than import it in app.module.ts
export const RoutingComponents = [
  HomeComponent,
  WildcardPagenotfoundComponent,
]
