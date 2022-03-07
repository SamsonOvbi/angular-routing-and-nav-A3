import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ArticleService } from '../data/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  
  public articles = [];
  // to hold the currently passed id parameter
  public selectedArticleId;
  public static selectedId = 2;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _articleService: ArticleService) { }
  
  ngOnInit() {
    // read the route parameter
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedArticleId = id;
      ArticleDetailsComponent.selectedId = id;
    }) //

    this._articleService.getArticles()
      .subscribe(data => this.articles = data);
    
  }

  /* Previous/Back button click */
  goPrevious() {
    let previousId = (this.selectedArticleId - 1) < 1? this.selectedArticleId: this.selectedArticleId - 1;
    this.router.navigate(['/articles', previousId]);
  }

  /* Next button click */
  goNext() {
    let length = this.articles.length;
    let nextId = (this.selectedArticleId + 1) > length? this.selectedArticleId: this.selectedArticleId + 1;
    this.router.navigate(['/articles', nextId]);
  }

  // back button - method to handle optional parameters and show current article highlighted
  goToArticles() {
    console.log('goToArticles clicked');
    let currentSelectedId = this.selectedArticleId ? this.selectedArticleId : null
    // relative path, links parameter array - {key:value}, {relativeTo property}
    // we can pass multiple parameters as per our requirements
    // this.router.navigate(['../', { id: currentSelectedId, name: 'Hello'  }]);
    this.router.navigate(['../', { id: currentSelectedId }], { relativeTo: this.activatedRoute });  // to the current route  append the article id and navigate to that URL
  }

  // to compare/match current route clicked and optional parameter
  isSelectedRouteMatchOptionalParam(curArticle) {
    return curArticle.id === this.selectedArticleId;
  }

    /* on overview button click */
    showOverview() {
      this.router.navigate(['overview'], { relativeTo: this.activatedRoute })
    }
  
    /* on contact button click */
    showContact() {
      this.router.navigate(['contact'], { relativeTo: this.activatedRoute })
    }
}
