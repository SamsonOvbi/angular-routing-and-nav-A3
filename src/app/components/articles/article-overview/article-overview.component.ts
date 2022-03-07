import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ArticleService } from '../data/article.service';
import { ArticleDetailsComponent } from '../article-details/article-details.component';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.css']
})
export class ArticleOverviewComponent implements OnInit {
  
  public articles = [];
  // to hold the currently passed id parameter
  public selectedArticleId;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _articleService: ArticleService) { }
  
  ngOnInit() {
    // read the route parameter
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedArticleId = id;
      this.selectedArticleId = ArticleDetailsComponent.selectedId;
    }) //

    this._articleService.getArticles()
      .subscribe(data => this.articles = data);    
  }
  
}
