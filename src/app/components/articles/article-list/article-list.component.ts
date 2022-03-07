import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../data/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  
  public articles = [];
  
  public selectedArticleId = 2;
  public static selectedId = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _articleService: ArticleService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedArticleId = id;
    })

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


  /* on article click */ 
  onLinkSelect(curArticle) {
    console.log('onLinkSelect curArticle');
    // navigate ( path, route parameter)
    // this.router.navigate(['articles', curArticle.id]);

    // relative path, links parameter array, relativeTo property
    this.router.navigate([curArticle.id], { relativeTo: this.activatedRoute }); // to the current route  append the article id and navigate to that URL
    ArticleListComponent.selectedId = curArticle.id;
  }
 
  // to compare/match current route clicked and optional parameter
  isSelectedRouteMatchOptionalParam(curArticle) {
    return curArticle.id === this.selectedArticleId;
  }

}
