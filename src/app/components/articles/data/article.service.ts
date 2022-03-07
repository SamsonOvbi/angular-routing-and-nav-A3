import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IArticle} from './article'
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class ArticleService {
  
  private _url: string= "/assets/articles.json";
  constructor( private http: HttpClient) { }

  getArticles() : Observable<IArticle[]>{
    return this.http.get<IArticle[]>(this._url)
  }
}
