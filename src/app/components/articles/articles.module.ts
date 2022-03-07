import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleOverviewComponent } from './article-overview/article-overview.component';
import { ArticleContactComponent } from './article-contact/article-contact.component';
import { ArticleService } from './data/article.service';


const routes: Routes = [
  //  { path: '', component: ALayoutComponent },
  { path: 'articles', component: ArticleListComponent, data: { animation: 'articles' } },
  {
   path: 'articles/:id', component: ArticleDetailsComponent ,
  children: [
    { path: 'overview', component: ArticleOverviewComponent },
    { path: 'contact', component: ArticleContactComponent }
  ] }
];

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailsComponent, ArticleOverviewComponent, ArticleContactComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [ArticleService],
  exports: []
})
export class ArticlesModule { }
