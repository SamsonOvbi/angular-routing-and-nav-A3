import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TestDetailsComponent } from './test-details/test-details.component';
import { TestPipeComponent } from './pipe-test/pipe-test.component';
import { TestScrollingComponent } from './test-scrolling/test-scrolling.component';
import { NumberToWordsComponent } from './number-to-words/number-to-words.component';
import { RsPipe } from '../common/pipes/rs';
import { NgnPipe } from '../common/pipes/ngn';
import { AnimationComponent } from './animation/animation.component';
import { UtilityDetailsComponent } from './utility-details/utility-details.component';

const routes: Routes = [
  //{ path: 'utility', component: UtilityListComponent },
  {
    path: 'utility', component: TestDetailsComponent,
    children: [
      { path: 'animation', component: AnimationComponent },
      { path: 'pipes', component: TestPipeComponent },
      { path: 'scroll', component: TestScrollingComponent },
      { path: 'number-to-words', component: NumberToWordsComponent },
    ]
  },
];

@NgModule({
  declarations: [TestDetailsComponent, TestPipeComponent, TestScrollingComponent, NumberToWordsComponent, RsPipe, NgnPipe, AnimationComponent, UtilityDetailsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  exports: []
})
export class UtilityModule { }
