import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../data/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  public products = [];
  // to hold the currently passed id parameter
  public selectedProductId;
  public static selectedId = 3;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _productService: ProductService) { }
  
  ngOnInit() {
    // read the route parameter
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedProductId = id;
      ProductDetailsComponent.selectedId = id;
    }) //

    this._productService.getProducts()
      .subscribe(data => this.products = data);
    
  }

  /* Previous/Back button click */
  goPrevious() {
    let previousId = (this.selectedProductId - 1) < 1? this.selectedProductId: this.selectedProductId - 1;
    this.router.navigate(['/products', previousId]);
  }

  /* Next button click */
  goNext() {
    let length = this.products.length;
    let nextId = (this.selectedProductId + 1) > length? this.selectedProductId: this.selectedProductId + 1;
    this.router.navigate(['/products', nextId]);
  }

  // back button - method to handle optional parameters and show current product highlighted
  goToProducts() {
    console.log('goToProducts clicked');
    let currentSelectedId = this.selectedProductId ? this.selectedProductId : null
    // relative path, links parameter array - {key:value}, {relativeTo property}
    // we can pass multiple parameters as per our requirements
    // this.router.navigate(['../', { id: currentSelectedId, name: 'Hello'  }]);
    this.router.navigate(['../', { id: currentSelectedId }], { relativeTo: this.activatedRoute });  // to the current route  append the product id and navigate to that URL
  }

  /* on overview button click */
  showDetails() {
    this.router.navigate(['overview'], { relativeTo: this.activatedRoute })
  }

  /* on contact button click */
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.activatedRoute })
  }
  // to compare/match current route clicked and optional parameter
  isSelectedRouteMatchOptionalParam(curProduct) {
    return curProduct.id === this.selectedProductId;
  }
}
