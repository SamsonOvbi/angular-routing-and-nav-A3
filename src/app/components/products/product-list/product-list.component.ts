import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../data/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  public products = [];

  public selectedProductId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _productService: ProductService) { }
    
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedProductId = id;
    })
    //
    this._productService.getProducts()
    .subscribe(data => this.products = data);
  }

  /* on product click */
  onLinkSelect(curProduct) {
    console.log('onLinkSelect curProduct');
    // navigate ( path, route parameter)
    // this.router.navigate(['products', curProduct.id]);

    // relative path, links parameter array, relativeTo property
    this.router.navigate([curProduct.id], { relativeTo: this.activatedRoute }); // to the current route  append the product id and navigate to that URL
  }

  // to compare/match current route clicked and optional parameter
  isSelectedRouteMatchOptionalParam(curProduct) {
    return curProduct.id === this.selectedProductId;
  }

}
